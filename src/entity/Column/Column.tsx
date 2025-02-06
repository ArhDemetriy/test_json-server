import React, { ReactElement } from 'react'

interface IColumn {
    children: ReactElement[]
}
export const Column = ({ children }: IColumn) => {
    return <div className="flex gap-10 flex-col items-start">{children}</div>
}
