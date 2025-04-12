export  class CreateuserDto {
  firstname: string;
  lastname: string;
  email: string;
  role: 'admin' | 'user' | 'editor' | 'moderator';
}
