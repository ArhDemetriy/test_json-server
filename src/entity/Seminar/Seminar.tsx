import Image from 'next/image'
import type { ISeminar } from '@/shared/type/Seminar'
import style from './Seminar.module.scss'
import { DeleteButton } from './DeleteButton'
import { EditButton } from './EditButton'

export const Seminar = (props: ISeminar) => {
    const { title, description, photo, date, time, id } = props
    return (
        <div className="flex gap-4 flex-col">
            <h6>{title}</h6>
            <div className={style.content}>
                <div className="flex gap-4 flex-col items-start">
                    <span>{description}</span>
                    <span>{date}</span>
                    <span>{time}</span>
                </div>
                {photo && (
                    <Image
                        className={style.image}
                        width={50}
                        height={50}
                        src={photo}
                        alt={`Фото`}
                    />
                )}
            </div>
            <div className={style.buttons}>
                <DeleteButton
                    id={id}
                    title={title}
                />
                <EditButton {...props} />
            </div>
        </div>
    )
}
