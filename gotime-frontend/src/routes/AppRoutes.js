import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ForgotPasswordPage from '../pages/public/ForgotPasswordPage';
import CreatePost from '../pages/private/CreatePost';
import CreateWorker from '../pages/private/CreateWorker';
// Lazy load các trang
const HomePage = lazy(() => import('../pages/public/HomePage'));
const LoginPage = lazy(() => import('../pages/public/LoginPage'));
const RegisterPage = lazy(() => import('../pages/public/RegisterPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const ProfilePage = lazy(() => import('../pages/private/ProfilePage'));
const BookingPage = lazy(() => import('../pages/private/BookingPage'));
const ReviewsPage = lazy(() => import('../pages/private/ReviewsPage'));
const WorkerCard = lazy(() => import("../pages/public/WorkerCard"));
const PostCard = lazy(() => import("../pages/private/PostCard"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Đang tải...</div>}>
      <Routes>
        <Route path="/" 
        element={<HomePage />} />
        <Route path="/forgot-password" 
        element={<ForgotPasswordPage />} />
        
        <Route path="/login"
          element={<LoginPage />}/>

        <Route path="/register"
          element={<RegisterPage />}/>

        <Route path="/post"
        element={<CreatePost />}/>

        <Route path="/post/:id" 
        element={<PostCard />} />
        
        <Route path="/profile" 
        element={<ProfilePage />} />

        <Route path="/workers/:id" 
          element={<WorkerCard />} />
        
        <Route path="/workers" 
          element={<CreateWorker />} />

        <Route path="/booking" 
        element={<BookingPage />} />

        <Route path="/reviews" 
        element={<ReviewsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
