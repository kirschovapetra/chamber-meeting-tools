export const resetPageData = (id: any) => {
	localStorage.removeItem(id);
};

export const resetSession = () => {
	localStorage.clear();
};

export const fetchPageData = async (pageId: any) => {
	try {
		const currentData = localStorage.getItem(pageId) || '[]';
		const dataParsed = JSON.parse(currentData) || {};
		return [...dataParsed];
	} catch (e) {
		console.error(e);
		return [];
	}
};

export const storePageData = (pageId: any, data: any) => {
	localStorage.setItem(pageId, JSON.stringify(data));
};

export const toHeader = (str: string) => {
	const splitString: string[] = str.split('_');
	const splitStringUppercase: string[] = splitString.map(
		(s: string) => s.charAt(0).toUpperCase() + s.substring(1),
	);
	return splitStringUppercase.join(' ');
};

export const toRoute = (str: string) => {
	return '/' + str.split('_').join('-');
};
