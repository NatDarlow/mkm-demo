export type CardType = {
    id: string,
    card: {
        type: string,
        number: string,
        last4: string,
        expiry: string,
        expired: boolean,
    },
};
