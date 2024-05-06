// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { Home } from "../components/lib/actions/users"; // Update the path as per your project structure

// const BlogPostDetailPage = () => {
//   const router = useRouter();
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     const { slug } = router.query;
//     if (slug) {
//       Home()(slug).then((data:any) => {
//         setPost(data);
//       }).catch((error:any) => {
//         console.error('Error fetching post:', error);
//       });
//     }
//   }, [router.query]);

//   if (!post) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{user.title}</h1>
//       <p>{user.description}</p>
//     </div>
//   );
// };

// export default BlogPostDetailPage;
