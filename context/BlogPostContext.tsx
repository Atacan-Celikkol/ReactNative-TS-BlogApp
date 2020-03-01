import createDataContext from "./createDataContext";

export interface BlogPost {
   id: string;
   title: string;
   content: string;
}


const blogReducer = (state: BlogPost[], action: { type: string, payload: any; }) => {
   switch (action.type) {
      case 'add':
         const id = Math.floor(Math.random() * 999).toString();
         return [...state, { id: id, title: action.payload.title, content: action.payload.content }];

      case 'delete':
         console.log(action.payload);
         return state.filter((blogPost) => blogPost.id != action.payload);

      default:
         return state;
   }
};
const addBlogPost = (dispatch) => {
   return (item, callback) => {
      dispatch({ type: 'add', payload: item });
      callback();
   };
};
const deleteBlogPost = (dispatch) => {
   return (item) => dispatch({ type: 'delete', payload: item });
};

export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost }, []);