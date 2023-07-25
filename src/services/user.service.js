import {Service} from "./service";
import {Database} from "../lib/database";
import {DeleteObjKey, encryptPassword, isValidPassword, Pagination} from "@yid/helpers";
import moment from "moment";
import {Op} from "sequelize";

export default class UserService extends Service {
	constructor(props) {
		super(props);
		this.schema = props?.schema ?? Database.user
	}
	
	async show() {
		try {
			this.condition = {
				...this.condition,
				where: {
					[this.key]: this.value
				},
				attributes: this.attributes ?? ['id', 'uuid', 'email', 'fullName', 'createdAt', "updatedAt"]
			}
			return await this.detail();
		} catch (err) {
			return [err, null]
		}
	}
	
	
	async travelCreate() {
		try {
			
			if (this.fields) {
				this.fields = this.fields.criteria.map((child) => ({
					...child,
					userId: this.user.id,
					createdAt: moment().toDate(),
					updatedAt: moment().toDate()
				}))
			}
			
			this.condition = {
				where: {
					criteriaId: {
						[Op.in]: this.fields.map((child) => child?.criteriaId)
					},
					userId: this.user.id
					
				}
			}
			
			const [err, check] = await this.detail()
			if (err) return [err, null]
			if (check) return [new Error("Error: Can't Add criteria, Please do not enter existing data "), null]
			console.log({check, err})
			const data = await this.schema.bulkCreate(this.fields, {returning: true})
			return [null, data]
		} catch (err) {
			return [err, null]
		}
	}
	
	async travelRecomm() {
		try {
			
			const {page, limit, direction} = Pagination(this.query)
			
			let querySql = `
			SELECT
    t.id as id,
    t.name as name,
    t.description as description,
    t.thumbnail as thumbnail,
    t.location as location,
    SUM(.60 * (c1.weight/c1.total)) as ncf,
    SUM(.40 * (c2.weight/c2.total)) as nsf,
       JSON_OBJECT(
           'ncf',JSON_OBJECT(
               'value', c1.weight,
               'calculate',SUM(c1.weight/c1.total)
           ),
           'nsf',JSON_OBJECT(
               'value', c2.weight,
               'calculate',SUM(c2.weight/c2.total)
           )
       ) as calculate,
       JSON_ARRAYAGG(
               JSON_OBJECT(
                       'id', c1.userId,
                       'weight', c1.weight
                   )
           )          as data,
       t.id
FROM travel as t
         INNER JOIN (SELECT c.travelId,
                            uc.userId,
                            COUNT(*) as total,
                            SUM(gm.weight) AS weight
                     from user_criteria as uc
                              INNER JOIN criteria c on uc.criteriaId = c.id
                              INNER JOIN gap_mapping gm on (uc.value - c.value) = gm.gap
                     WHERE c.isPrimary = true


                     GROUP BY c.travelId, uc.userId) AS c1 ON c1.travelId = t.id
    AND c1.userId = :id

         INNER JOIN (SELECT c.travelId,
                            uc.userId,
                            COUNT(*) as total,
                            SUM(gm.weight) AS weight
                     from user_criteria as uc
                              INNER JOIN criteria c on uc.criteriaId = c.id
                              INNER JOIN gap_mapping gm on (uc.value - c.value) = gm.gap
                     WHERE c.isPrimary = false


                     GROUP BY c.travelId, uc.userId) AS c2 ON c2.travelId = t.id
    AND c2.userId = :id

GROUP BY t.id, t.name, t.location, t.thumbnail
HAVING (ncf + nsf) >= :havingResult
ORDER BY :direction
`
			
			const data = await Database.sequelize.query(querySql, {
				replacements: {
					id: this.user.id,
					direction: direction,
					havingResult: this.query?.min ? parseInt(this.query?.min) : 0,
				},
				raw: false, nest: true
			})
			return [null, data]
			
		} catch (err) {
			return [err, null]
		}
	}
	
	async historyList() {
		try {
			const {page, limit, direction} = Pagination(this.query)
			let querySql = this.sql ?? `SELECT
    uc2.userId,
    JSON_OBJECT(
        'id', t.id,
        'name',t.name,
        'thumbnail',t.thumbnail,
        'description',t.description,
        'createdAt',t.createdAt
    ) as travel,
     JSON_OBJECT(
        'id', c.id,
        'name',c.name,
        'color',c.color,
        'background',c.background
    ) as category,
    JSON_ARRAYAGG(uc2.criterias) as criterias
FROM travel as t
INNER JOIN travel_category tc on t.id = tc.travelId
INNER JOIN (
    SELECT
        c.id,
        c.name,
        c.color,
        c.background
    FROM category as c
    GROUP BY c.id
) c ON c.id = tc.categoryId
LEFT OUTER JOIN (
    SELECT uc.id,
           c2.travelId,
           uc.userId,
        JSON_OBJECT(
            'id',c2.id,
            'label',c2.label,
            'value',c2.value,
            'compareAtValue',uc.value,
            'description',c2.description
        ) as criterias
    FROM user_criteria AS uc
    INNER JOIN user u on uc.userId = u.id
    INNER JOIN criteria c2 on c2.id = uc.criteriaId
) uc2 ON uc2.travelId = tc.travelId
WHERE uc2.userId = ${this.user?.id}
GROUP BY t.id,tc.travelId,tc.id

ORDER BY tc.travelId ${direction ? direction : "ASC"}
LIMIT ${page > 1 ? `${(page - 1) * limit},${page * limit}` : `0,${limit}`};
`
			const data = await Database.sequelize.query(querySql, {raw: false, nest: true})
			
			return [null, data]
		} catch (err) {
			return [err, null]
		}
	}
	
	async historyShow() {
		try {
			const {page, limit, direction} = Pagination(this.query)
			let querySql = this.sql ?? `SELECT
    uc2.userId,
    JSON_OBJECT(
        'id', t.id,
        'name',t.name,
        'thumbnail',t.thumbnail,
        'description',t.description,
        'createdAt',t.createdAt
    ) as travel,
     JSON_OBJECT(
        'id', c.id,
        'name',c.name,
        'color',c.color,
        'background',c.background
    ) as category,
    JSON_ARRAYAGG(uc2.criterias) as criterias
FROM travel as t
INNER JOIN travel_category tc on t.id = tc.travelId
INNER JOIN (
    SELECT
        c.id,
        c.name,
        c.color,
        c.background
    FROM category as c
    GROUP BY c.id
) c ON c.id = tc.categoryId
LEFT OUTER JOIN (
    SELECT uc.id,
           c2.travelId,
           uc.userId,
        JSON_OBJECT(
            'id',c2.id,
            'label',c2.label,
            'value',c2.value,
            'compareAtValue',uc.value,
            'description',c2.description
        ) as criterias
    FROM user_criteria AS uc
    INNER JOIN user u on uc.userId = u.id
    INNER JOIN criteria c2 on c2.id = uc.criteriaId
) uc2 ON uc2.travelId = tc.travelId
WHERE uc2.userId = ${this?.user?.id}
AND t.id = ${this.value}
GROUP BY t.id,tc.travelId,tc.id

ORDER BY tc.travelId ${direction ? direction : "ASC"}
`
			const [data] = await Database.sequelize.query(querySql, {raw: false, nest: true})
			
			return [null, data]
		} catch (err) {
			return [err, null]
		}
	}
	
	
	async updateUser() {
		try {
			if (this.fields?.email && this.fields?.email !== this.user.email) {
				this.key = 'email'
				this.value = this.fields.email
				this.condition = {
					where: {}
				}
				const [err, data] = await this.detail()
				if (data) return [new Error("Email has been Registered!"), null]
			}
			this.key = 'id'
			this.value = this.user.id
			
			return await this.update()
		} catch (err) {
			return [err, null]
		}
	}
	
	async updatePassword() {
		try {
			this.key = 'id'
			this.value = this.user.id
			
			this.condition = {
				where: {
					[this.key]: this.value
				}
			}
			const [errUser, dataUser] = await this.detail()
			if (!dataUser) return [new Error('Error: User not found'), null]
			const validate = isValidPassword(this.fields?.oldPassword, dataUser?.password)
			if (!validate) {
				return [new Error('Error: Password not Match!'), null]
			}
			
			const {hashPassword, salt} = await encryptPassword(this.fields.password)
			Reflect.set(this.fields, 'password', hashPassword)
			Reflect.set(this.fields, 'salt', salt)
			DeleteObjKey(this.fields, ['oldPassword'])
			
			
			console.log(this.fields, 'FIELDS')
			
			
			return await this.update()
		} catch (err) {
			return [err, null]
		}
	}
	
}