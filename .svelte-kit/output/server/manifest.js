export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon/favicon-32x32.png","images/oneguyintropic.jpeg"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg"},
	_: {
		entry: {"file":"_app/immutable/start-51befe23.js","imports":["_app/immutable/start-51befe23.js","_app/immutable/chunks/index-c080d7b6.js","_app/immutable/chunks/singletons-d3705633.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				errors: [1],
				layouts: [0],
				leaf: 2
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
