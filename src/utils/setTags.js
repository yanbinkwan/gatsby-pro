const setTags = recipes => {
  const allTags = {}

  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      if (allTags[tag]) {
        allTags[tag] += 1;
      } else {
        allTags[tag] = 1;
      }
    })
  })
  const newTags = Object.entries(allTags).sort((a, b) => {

    const [secondTag] = b;
    const [firstTag] = a;
    return firstTag.localeCompare(secondTag);
  })
  return newTags;
}

export default setTags