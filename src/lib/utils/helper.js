export async function loadComponent(icon) {
  const jsIcon = (await import(`../${icon}.js` /* @vite-ignore */))[icon];
  
  const iconName = jsIcon.name;
  const iconSvg = jsIcon.svg;
  const iconBox = jsIcon.box;
  // console.log('iconName', iconName, iconBox)

  return { iconName, iconSvg, iconBox };
}
