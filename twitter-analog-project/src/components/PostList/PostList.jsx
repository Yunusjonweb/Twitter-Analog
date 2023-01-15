import PostListItem from "../PostListItem/PostListItem";
import "./PostList.css";

export default function PostList({ data, onDeleted,onToogleImportant,onToogleLiked}) {
  return (
    <div className="PostList">
      <ul className="app-list list-group">
        {data.length ? data.map(item => {
          const { id, ...data } = item;
          return (
            <li key={item.id} className="list-group-item">
              <PostListItem
                {...data}
                onDeleted={()=>onDeleted(id)}
                onToogleImportant={()=>onToogleImportant(id)}
                onToogleLiked={()=>onToogleLiked(id)}
              />
            </li>
          )
        }) : (
          <h3>Malumot topilmadi</h3>
        )}
      </ul>
    </div>
  )
}