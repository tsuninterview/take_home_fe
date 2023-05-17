/**
 * returns the sum of each subcategory from current dataset for pie chart, 
 * if there is no subcategories(ex. demand), returns the sum of total field.
 */
export const sumCategories = (data, currentTab='production') => {
  let res
  const categoriesData = data[currentTab]?.details.map(
    (element) => element.valeurs
  )

  if (currentTab === 'production') {
    const categoriesData = data.production.details.map(
      (element) => element.valeurs
    )
    res = categoriesData.reduce((acc, element) => ({
      hydraulique: element.hydraulique
        ? acc.hydraulique + element.hydraulique
        : acc.hydraulique,
      eolien: element.eolien ? acc.eolien + element.eolien : acc.eolien,
      solaire: element.solaire ? acc.solaire + element.solaire : acc.solaire,
      thermique: element.thermique
        ? acc.thermique + element.thermique
        : acc.thermique,
      autres: element.autres ? acc.autres + element.autres : acc.autres,
    }))
  } else if (currentTab === 'demand') {
    res = categoriesData.reduce((acc, element) => ({
      demandeTotal: element.demandeTotal
        ? acc.demandeTotal + element.demandeTotal
        : acc.demandeTotal,
    }))

    res = { total: Object.values(res) }
  }

  return res
}

export const getLabelsChart = (currentTab = 'production') => {
  if (currentTab === 'production') {
    return ['Hydraulique', 'Eolien', 'Solaire', 'Thermique', 'Autres']
  } else if (currentTab === 'demand') {
    return ['Total']
  }
}
