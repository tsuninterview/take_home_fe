export const sumCategories = (data, currentTab) => {
  let res;
  const categoriesData = data[currentTab]?.details.map(
    (element) => element.valeurs
  );

  if (currentTab === "productions") {
    console.log(data.productions.details);
    const categoriesData = data.productions.details.map(
      (element) => element.valeurs
    );
    console.log(categoriesData);
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
    }));
  } else if (currentTab === "demands") {
    res = categoriesData.reduce((acc, element) => ({
      demandeTotal: element.demandeTotal
        ? acc.demandeTotal + element.demandeTotal
        : acc.demandeTotal,
    }));

    res = { total: Object.values(res) };
  }

  return res;
};

export const getLabelsChart = (currentTab = "productions") => {
  if (currentTab === "productions") {
    return ["Hydraulique", "Eolien", "Solaire", "Thermique", "Autres"];
  } else if (currentTab === "demands") {
    return ["Total"];
  }
};
