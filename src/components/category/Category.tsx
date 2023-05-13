import ICategory from '../../models/ICategory';
import './Category.css';


function Category(props: ICategory) {

  return (
    <div className="Category">
      <p>{props.name}</p>
    </div>
  );

}
export default Category;