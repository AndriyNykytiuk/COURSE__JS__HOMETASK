const licenseCategory = prompt('введіть категорію (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль)')

if (licenseCategory != 'A' && licenseCategory != 'B' && licenseCategory != 'C') {
	document.write(` літери мають бути Латинськими та Великими`)
	
} else {
	let licenseCategoryList
switch (licenseCategory) {
	case 'A': licenseCategoryList = 'Мото'
		break
	case 'B': licenseCategoryList = 'легковик'
		break
	case 'C': licenseCategoryList = 'Вантажівка'
		break
}
document.write(`маєте дозвіл їздити на ${licenseCategoryList}`)
}

