export interface User {
 id: number;
 likes: Array<{
   id: number;
   name: string;
 }>
}
