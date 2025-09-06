'use strict';

const restaurantRow = (restaurant) => {
  const {name, company} = restaurant;
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${name}</td>
    <td>${company}</td>
  `;
  return tr;
};

const restaurantModal = (restaurant, menu) => {
  const {name, address, postalCode, city, phone, company} = restaurant;
  const {courses} = menu;
  let html = `
      <h3>${name}</h3>
      <address>
        ${address}<br>
        ${postalCode} ${city} <br>
        ${phone} <br>
        ${company}
      </address>
    `;
  let menuHtml = `
    <table>
      <thead>
        <tr>
          <th>Nimi</th>
          <th>Hinta</th>
          <th>Allergeenit</th>
        </tr>
      </thead>
      <tbody>
  `;

  courses.forEach((course) => {
    const {name, price, diets} = course;

    if (typeof course.diets === 'string') {
      course.diets = course.diets.split(',');
    }

    const filteredDiets = diets?.filter(
      (diet) => diet !== '*' && diet !== 'A' && diet !== 'ILM'
    );

    const dietsWithEmojis = filteredDiets?.map((diet) => {
      switch (diet) {
        case 'Veg':
          return '&#129382;';
        case 'G':
          return '&#127838;';
        case 'M':
          return '&#129472;';
        case 'L':
          return '&#128046;';
        case 'VS':
          return '&#129476;';
        default:
          return '&#128286;';
      }
    });
    console.log(diets);

    const dietString = dietsWithEmojis?.reduce(
      (accString, diet) => accString + diet + '&nbsp;',
      ''
    );

    menuHtml += `
      <tr>
        <td>${name}</td>
        <td>${price}</td>
        <td>${dietString}</td>
      </tr>
    `;
  });

  menuHtml += `
    </tbody>
  </table>
  `;
  html += menuHtml;

  return html;
};

export {restaurantRow, restaurantModal};
