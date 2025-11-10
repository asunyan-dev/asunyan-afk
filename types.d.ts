export function getAfk(
    userId: string
): Promise<string | null>;

export function setAfk(
    userId: string,
    message: string
);

export function removeAfk(
    userId: string
);