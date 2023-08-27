import { error } from '@sveltejs/kit';

/** @type {import('./icon-test/$types').PageServerLoad} */
export async function load ({ params }) {
  let iconNames = [];
  const modules = import.meta.glob('../lib/*.js');
  // console.log('modules: ', modules)
  for (const path in modules) {
    const mod = await modules[path](); // Await the dynamic import

    // Get the icon name from the mod object using the property getter
    const iconName = mod[Object.keys(mod)[0]].name;
    
    // Add the icon name to the array
    iconNames.push(iconName);

  }

  return {
    props: {
      iconNames
    }
  };
  
  // Alternatively, you can use object shorthand syntax:
  // return { props: { iconNames } };

  throw error(404, 'Not found');
}






