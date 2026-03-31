import { useRef, useEffect } from "react";

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

export const toCamelCase = (str:string) => {
	const firstChar = str.charAt(0)

	return firstChar.toUpperCase()+str.substring(1)
}
