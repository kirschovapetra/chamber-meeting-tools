import React, { createContext, useContext, useEffect, useState } from 'react';

const StorageContext = createContext<any>(undefined);

export const StorageProvider: any = ({ children }: { children: React.ReactNode }) => {
	const [session, setSession] = useState(() => {
		var saved: any = {};
		if (typeof window !== 'undefined') {
			saved = localStorage.getItem('session');
		}
		return saved ? JSON.parse(saved) : {};
	});

	useEffect(() => {
		localStorage.setItem('session', JSON.stringify(session));
	}, [session]);

	const resetSession = () => {
		setSession({});
		localStorage.removeItem('session');
	};

	const addRow = ({ table, rowIidx }: { table: Row[]; rowIidx?: number }) => {};
	const removeRow = ({ table, rowIidx }: { table: Row[]; rowIidx: number }) => {};
	const addColumn = ({ table, colIdx }: { table: Row[]; colIdx?: number }) => {};
	const removeColumn = ({ table, colIdx }: { table: Row[]; colIdx: number }) => {};
	const updateCell = ({ table, rowIdx, colIdx, value }: { table: Row[]; rowIdx: number; colIdx: number; value: string | number }) => {};

	return (
		<StorageContext.Provider
			value={{
				session,
				addRow,
				removeRow,
				addColumn,
				removeColumn,
				updateCell,
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
