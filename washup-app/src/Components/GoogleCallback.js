import React, {useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const GoogleCallback = () => {

    const navigate = useNavigate();
    const {login} = useAuth();

    useEffect(() => {
        const fetchGoogleUserInfo = async (googleToken) => {
            try {
                const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
                    headers: {
                        Authorization: `Bearer ${googleToken}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log("data: ",data)
                    const email = data.email;
                    const username = data.name;
                    console.log("name: ",username)
                    console.log("email: ",email)
                    handleGoogleLogin(googleToken, email, username);
                } else {
                    console.error('Failed to fetch user info from Google');
                }
            } catch (error) {
                console.error('Error fetching Google user info:', error);
            }
        };

        // Verificar si hay un token de Google en la URL
        const hashParams = new URLSearchParams(window.location.hash.substring(1)); // Elimina el carácter '#'
        const googleToken = hashParams.get('access_token');
    
        if (googleToken) {
            fetchGoogleUserInfo(googleToken);
        }
    }, []);
    
      const handleGoogleLogin = async (googleToken, email, username) => {
        console.log("token: ",googleToken)
        try {
          const response = await fetch('http://localhost:4000/social-login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: googleToken,
                email: email,
                username: username,
            }),
          });
          console.log("response: ",response)
          if (response.ok) {
            const data = await response.json();
            const token = data.token;
            login(token);
            navigate('/');
          } else {
            // Manejar la respuesta de error, por ejemplo, mostrar un mensaje de error.
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

    return <div>Logging in with Google...</div>;
  }

export default GoogleCallback;