import React, { ReactElement } from 'react'
import style from './Column.module.scss'

interface IColumn {
    children: ReactElement[]
}
export const Column = ({ children }: IColumn) => {
    return <div className={style.root}>{children}</div>
}
