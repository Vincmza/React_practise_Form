export function identity(msg) {
    return {
        required: `Votre ${msg} est indispensable`,
        maxLength: {
            value: 30,
            message: "Ce champ doit contenir au maximum 30 caractères ",
        },
        minLength: {
            value: 2,
            message: "Ce champ doit contenir au minimum 2 caractères",
        },
        pattern: {
            value: /^[a-zA-Z-àáâãäåçèéêëìíîïðòóôõöùúûüýÿ'_ ]{1,}$/,
            message: "Ce champ ne peut pas contenir de chiffres",
        },
    };
}
export function email(msg) {
    return {
        required: `Votre ${msg} est indispensable`,
        maxLength: {
            value: 80,
            message: "Votre email doit contenir au maximum 80 caractères ",
        },
        minLength: {
            value: 10,
            message: "Votre email doit contenir au minimum 10 caractères",
        },
        pattern: {
            value: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
            message:
                "Votre email doit contenir un @ pour être validé et terminer convenablement (exemple : gmail.com, outlook.fr), votre email ne doit pas contenir d'accent",
        },
    };
}
export function birthDay(msg) {
    let today = new Date();
    let dd = today.getDate().toString().padStart(2, "0");
    let mm = (today.getMonth() + 1).toString().padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;

    return {
        required: `Votre ${msg} est obligatoire`,
        max: {
            value: today,
            message: "La date sélectionnée ne peut pas dépasser la date d'aujourd'hui",
        },
        min: {
            value: "1945-01-01",
            message: "La date sélectionnée doit être égale ou supérieure au 1er Janvier 1945",
        },
    };
}
export function phone() {
    return {
        pattern: {
            value: /^(0)[0-9]{9}$/,
            message: "Chiffres uniquement. Votre numéro doit commencer par un zéro",
        },
        minLength: {
            value: 10,
            message: "10 chiffres minimum"
        },
    };
}
export function link() {
    return {
        pattern: {
            value: /^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/,
            message: "Ceci n'est pas une url"
        }
    };
}
