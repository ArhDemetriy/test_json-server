import React, { ReactElement } from 'react'

interface IColumn {
    children: ReactElement[]
}
export const Column = ({ children }: IColumn) => {
    return <div className="flex gap-4 items-center flex-col">{children}</div>
}
