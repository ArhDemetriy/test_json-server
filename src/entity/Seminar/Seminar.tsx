import type { ISeminar } from '@/shared/type/Seminar'

export const Seminar = ({ title, description }: ISeminar) => {
    return (
        <div className="flex gap-4 flex-col items-start">
            <h6>{title}</h6>
            <span>{description}</span>
        </div>
    )
}
