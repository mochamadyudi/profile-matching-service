import path from 'path';
const rootPath = __dirname
const handleBarRoot = path.resolve(rootPath,'..')

const HandleBarConfig = {
	ROOT:__dirname,
	_: handleBarRoot,
	configPath:rootPath,
	
}

export default  HandleBarConfig
