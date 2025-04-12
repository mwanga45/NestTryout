export  class CreateuserDto {
  firstname: string;
  Lastname: string;
  email: string;
  role: 'admin' | 'user' | 'editor' | 'moderator';
}
