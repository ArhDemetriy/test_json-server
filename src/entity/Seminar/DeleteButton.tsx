'use client'
import { useUnit } from 'effector-react'
import { toDeleteSeminar } from '../DeleteSeminar'
import { type EventPayload } from 'effector'

export const DeleteButton = (props: EventPayload<typeof toDeleteSeminar>) => {
    const toDelete = useUnit(toDeleteSeminar)
    const onClick = () => toDelete(props)

    return (
        <button
            type="button"
            onClick={onClick}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        >
            Удалить
        </button>
    )
}
