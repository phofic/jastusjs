# Dribbble Clone

## A Full Stack Dribbble Clone Application using Next.js

![Thumbnail](http://res.cloudinary.com/dhz0qhtw2/image/upload/v1721888755/jecifq7ysd0rhojgp4bl.png)

This project is a full-stack clone of the **Dribbble** platform, built using **Next.js** and a range of modern web technologies. The application allows users to upload and share creative shots, similar to the functionality provided by Dribbble.

### Features:
- Upload section for adding shots, including text, images, videos, and galleries
- Render Shots, Like, Comment, Save, Follow Creator and Profile Page
- User authentication using **Clerk** and **NextAuth**
- Image and media hosting via **Cloudinary**
- Server state management with **React Query**
- PostgreSQL database powered by **Prisma** and **Neon**

### Tech Stack:
- **Next.js**: Full-stack framework for React
- **PostgreSQL**: Relational database
- **Prisma**: ORM for database interactions
- **Clerk** & **NextAuth**: Authentication
- **Neon**: Cloud database provider
- **React Query**: Server state management
- **Cloudinary**: Image and video hosting

---

### 📂 Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Sattu2806/Gribbble.git
   ```
2. Navigate to the project folder:

  ```bash
  cd Gribbble
  ```

3. Install dependencies:

  ```bash
  npm install
  ```

4. Set up environment variables in a .env file:

  ```bash
  DATABASE_URL= #########
  AUTH_SECRET = ##################
  GOOGLE_CLIENT_ID= #############
  GOOGLE_CLIENT_SECRET= ############
  GITHUB_CLIENT_ID = ############
  GITHUB_CLIENT_SECRET = ###############
  NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET = ################
  NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL = ##########
  NEXT_PUBLIC_URL = ##############
  ```

5. Run the development server:

  ```bash
  npm run dev
  ```


## 📫 Contact & Support

If you have any questions or need further assistance, please feel free to open issue or discussion!


