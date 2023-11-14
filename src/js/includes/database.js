const dictionary = [
    {
        title: "Proteina",
        data: [
            {
                "alimento": "Queso Cottage",
                "cantidad": "245g"
            },
            {
                "alimento": "Salmón cocido",
                "cantidad": "125g"
            },
            {
                "alimento": "Camarones cocidos",
                "cantidad": "125g"
            },
            {
                "alimento": "Sardinas en agua",
                "cantidad": "120g"
            },
            {
                "alimento": "Atún en agua",
                "cantidad": "120g"
            },
            {
                "alimento": "Lomo de cerdo magro cocido",
                "cantidad": "110g"
            },
            {
                "alimento": "Lomo de res magro cocido",
                "cantidad": "110g"
            },
            {
                "alimento": "Pechuga de pollo cocida",
                "cantidad": "110g"
            },
            {
                "alimento": "Claras de huevo",
                "cantidad": "9 grandes"
            },
            {
                "alimento": "Whey Protein",
                "cantidad": "40g"
            },
        ]
    },
    {
        title: "Carbohidratos",
        data: [
            {
                "alimento": "Patata cocida",
                "cantidad": "150g",
            },
            {
                "alimento": "Lentejas cocidas",
                "cantidad": "145g",
            },
            {
                "alimento": "Choclo/Maíz",
                "cantidad": "145g",
            },
            {
                "alimento": "Frijoles negros o blancos cocidos",
                "cantidad": "123g",
            },
            {
                "alimento": "Bananas",
                "cantidad": "120g",
            },
            {
                "alimento": "Arroz integral cocido",
                "cantidad": "120g",
            },
            {
                "alimento": "Batata cocida",
                "cantidad": "115g",
            },
            {
                "alimento": "Quinoa cocida",
                "cantidad": "105g",
            },
            {
                "alimento": "Arroz blanco cocido",
                "cantidad": "100g",
            },
            {
                "alimento": "Pasta cocida",
                "cantidad": "90g",
            },
            {
                "alimento": "Plátano maduro cocido",
                "cantidad": "85g",
            },
            {
                "alimento": "Arepa hecha con harina de maíz precocida",
                "cantidad": "85g",
            },
            {
                "alimento": "Yuca cocida",
                "cantidad": "75g",
            },
            {
                "alimento": "Tortilla de maíz",
                "cantidad": "62g",
            },
            {
                "alimento": "Pan integral",
                "cantidad": "60g",
            },
            {
                "alimento": "Pan blanco",
                "cantidad": "55g",
            },
            {
                "alimento": "Tortilla de trigo",
                "cantidad": "50g",
            },
            {
                "alimento": "Hojuelas de avena crudas",
                "cantidad": "47g",
            }
        ]
    },
    {
        title: "Grasas",
        data: [
            {
                "alimento":"Aguacate",
                "cantidad": "100g",
            },
            {
                "alimento":"Aceitunas verdes y negras",
                "cantidad": "95g",
            },
            {
                "alimento":"Semillas de chía",
                "cantidad": "43g",
            },
            {
                "alimento":"Semillas de linaza",
                "cantidad": "35g",
            },
            {
                "alimento":"Maní",
                "cantidad": "29g",
            },
            {
                "alimento":"Almendras",
                "cantidad": "28g",
            },
            {
                "alimento":"Semillas de sésamo",
                "cantidad": "26g",
            },
            {
                "alimento":"Nueces",
                "cantidad": "22g",
            },
            {
                "alimento":"Aceite de canola",
                "cantidad": "1 cucharada",
            },
            {
                "alimento":"Aceite de oliva",
                "cantidad": "1 cucharada",
            },
        ]
    }
    
    ];
// this function creates a map od the array and returns the titles only
const getTitles = () => {
    return dictionary.map((item) => item.title);
};

// this function returns the data of the group selected
const getAlimentosFromGroup = (group) => {
    const data = dictionary.find((item) => item.title === group).data;
    // return sorted data
    return data.sort((a, b) => {
        if (a.alimento < b.alimento) {
            return -1;
        }
        if (a.alimento > b.alimento) {
            return 1;
        }
        return 0;
    });
}    

export { getAlimentosFromGroup, getTitles };