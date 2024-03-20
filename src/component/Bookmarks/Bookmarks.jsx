import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,times}) => {
    return (
    
        <div className='md:w-1/3 bg-gray-400 p-4 rounded-xl ml-6 text-center'>
            <div className="text-3xl font-bold  border-b-4 mb-6 ">
                <h2>Reading time:{times}</h2>
            </div>
            <h2 className='text-3xl font-bold mb-4 '>Bookmarked Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                
            }
            
        </div>   
    );
};

export default Bookmarks;