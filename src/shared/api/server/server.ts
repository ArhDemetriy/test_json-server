const SERVER_URL = 'http://localhost:4000'

type IMethod = 'POST' | 'GET' | 'DELETE'

interface IFetchWith {
    method: IMethod
    body?: any
    forceInit?: RequestInit
    path: string
}

export const fetchWith = async <T>({ method, body, forceInit, path }: IFetchWith) =>
    fetch(
        SERVER_URL + path,
        Object.assign<RequestInit, RequestInit | undefined>(
            {
                method,
                body,
            },
            forceInit,
        ),
    )
        .then(data => data.json() as T)
        .catch(() => null)
