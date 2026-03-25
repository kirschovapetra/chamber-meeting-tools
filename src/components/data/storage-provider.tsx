import React, { createContext, useContext, useEffect, useState } from 'react';

const StorageContext = createContext<any>(undefined);



export const StorageProvider: any = ({ children }: { children: React.ReactNode }) => {
	
	
	const [session, setSession] = useState(() => {
	var saved: any = {
		timer: [],
		ahCounter: [],
		grammarian: [],
	};

	if (typeof window !== 'undefined') {
		saved.timer = localStorage.getItem('timer');
		saved.ahCounter = localStorage.getItem('ahCounter');
		saved.grammarian = localStorage.getItem('grammarian');
	}

	return saved;
});


	const resetPage = (id:any) => {
		localStorage.removeItem(id)
	}

	const resetSession = (id:any) => {
		localStorage.clear()
	}

	const updateData = (pageId:any, data:any) => {
		localStorage.setItem(pageId, data)
	}

	return (
		<StorageContext.Provider
			value={{
				session,
				setSession,
				updateData,
				resetSession,
			}}
		>
			{children}
		</StorageContext.Provider>
	);
};

export const useStorage = () => {
	const context = useContext(StorageContext);

	if (!context) {
		throw new Error('useStorage must be used within a StorageProvider');
	}
	return context;
};
