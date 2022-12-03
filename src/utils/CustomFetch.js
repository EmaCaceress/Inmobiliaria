export const stock = [
	{
		id: 0,
		title: "ALQUILA DEPTO 4 AMBIENTES EN B° JUAN EL BUENO",
		description: "Departamento con vista al mar, buena vecindad",
		cost: "45.000",
		picture: ["https://proaimg.s3-sa-east-1.amazonaws.com/propiedad/original/572/572499.jpg"],
	},
	{
		id: 1,
		title: "ALQUILA DEPTO 4 AMBIENTES EN B° JUAN EL BUENO",
		description: "Departamento con vista al mar, buena vecindad",
		cost: "45.000",
		picture: ["https://proaimg.s3-sa-east-1.amazonaws.com/propiedad/original/572/572499.jpg"],
	},
	{
		id: 2,
		title: "ALQUILA DEPTO 4 AMBIENTES EN B° JUAN EL BUENO",
		description: "Departamento con vista al mar, buena vecindad",
		cost: "45.000",
		picture: ["https://proaimg.s3-sa-east-1.amazonaws.com/propiedad/original/572/572499.jpg"],
	},
	{
		id: 3,
		title: "ALQUILA DEPTO 4 AMBIENTES EN B° JUAN EL BUENO",
		description: "Departamento con vista al mar, buena vecindad",
		cost: "45.000",
		picture: ["https://proaimg.s3-sa-east-1.amazonaws.com/propiedad/original/572/572499.jpg"],
	},
	{
		id: 4,
		title: "ALQUILA DEPTO 4 AMBIENTES EN B° JUAN EL BUENO",
		description: "Departamento con vista al mar, buena vecindad",
		cost: "45.000",
		picture: ["https://proaimg.s3-sa-east-1.amazonaws.com/propiedad/original/572/572499.jpg"],
	},
	{
		id: 5,
		title: "ALQUILA DEPTO 4 AMBIENTES EN B° JUAN EL BUENO",
		description: "Departamento con vista al mar, buena vecindad",
		cost: "45.000",
		picture: ["https://proaimg.s3-sa-east-1.amazonaws.com/propiedad/original/572/572499.jpg"],
	},
	{
		id: 6,
		title: "ALQUILA DEPTO 4 AMBIENTES EN B° JUAN EL BUENO",
		description: "Departamento con vista al mar, buena vecindad",
		cost: "45.000",
		picture: ["https://proaimg.s3-sa-east-1.amazonaws.com/propiedad/original/572/572499.jpg"],
	},
]

const is_ok = true;

const customFetch = (time) => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			is_ok
				? res(stock)
				: rej("Error")
		}, time)
	})
}

export default customFetch;
