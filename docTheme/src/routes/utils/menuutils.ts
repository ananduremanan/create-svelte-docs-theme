export async function fetchData() {
  const modules = import.meta.glob("../components/**/*.svx");
  const menuItems = Object.keys(modules)
    .map((item) => item.replace("../components/", "").split("/")[0])
    .filter((value, index, self) => self.indexOf(value) === index);
  return menuItems;
}

export function getNextPage(current_url: string, menuItemsArray: any[]) {
  if (current_url && menuItemsArray.length > 0) {
    const currentIndex = menuItemsArray.indexOf(current_url);
    if (currentIndex !== -1) {
      return menuItemsArray[currentIndex + 1] || null;
    }
  }
  return null;
}

export function getPreviousPage(current_url: string, menuItemsArray: any[]) {
  if (current_url && menuItemsArray.length > 0) {
    const currentIndex = menuItemsArray.indexOf(current_url);
    if (currentIndex !== -1) {
      return menuItemsArray[currentIndex - 1] || null;
    }
  }
  return null;
}
