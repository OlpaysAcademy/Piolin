const initialState = {
  recipeToShow: '',
  recipes: [{ id: 335, name: 'Arroz primaveral', ingredients: ['arroz', 'primavera'], isRead: false },
    { id: 332, name: 'Empanated', ingredients: ['harina', 'carne', 'cebolla'], isRead: false },
    { id: 423, name: 'Ensalated', ingredients: ['tomate', 'lechuga', 'zanahoria', 'huevo'], isRead: false }]
};

export default function recipes(state = initialState, action) {
  switch (action.type) {
    case 'ADD_RECIPE':
      return Object.assign({}, state, {
        recipes: [
          ...state.recipes,
          {
            id: action.recipe.id,
            name: action.recipe.name,
            ingredients: [],
            isRead: false,
          },
        ],
      });
    case 'ADD_INGREDIENT':
      return Object.assign({}, state, {
        recipes: state.recipes.map(recipe => {
          if (recipe.id === action.ingredient.recipeId) {
            return Object.assign({}, recipe, {
              ingredients: [
                ...recipe.ingredients,
                action.ingredient.name,
              ],
            });
          }
          return recipe;
        }),
      });
    case 'TOGGLE_RECIPE':
      return Object.assign({}, state, {
        recipes: state.recipes.map(recipe => {
          if (recipe.id === action.id) {
            return Object.assign({}, recipe, {
              isRead: !recipe.isRead,
            });
          }
          return recipe;
        }),
      });
    case 'READ_ALL_RECIPES':
      return Object.assign({}, state, {
        recipes: state.recipes.map(recipe => {
          return Object.assign({}, recipe, {
            isRead: true
          })
        })
      })
    case 'UNREAD_ALL_RECIPES':
      return Object.assign({}, state, {
        recipes: state.recipes.map(recipe => {
          return Object.assign({}, recipe, {
            isRead: false
          })
        })
      })
    case 'SHOW_RECIPE':
      return Object.assign({}, state, {
        recipeToShow: action.recipeId,
        recipes: state.recipes.map(recipe => {
          if (recipe.id === action.recipeId) {
            return Object.assign({}, recipe, {
              isRead: true,
            });
          }
          return recipe;
        }),
      });
    default:
      return state;
  }
}
