* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Arial', Helvetica, sans-serif;
    scroll-behavior: smooth;
}

body {
    background-color: rgb(56, 56, 56);
    color: white;
}


nav {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgb(0,0,0);
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 3px 20px rgba(0,0,0,0.335);
    z-index: 100;
}

.wrap-img {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
}

.logo {
    height: 50px;
    width: 50px;
    object-fit: contain;
}

.logo-text {
    color: #FFFEA1;
    font-family: 'Norwester', Arial, sans-serif;
    font-size: 22px;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 0 0 6px rgba(255,255,161,0.5);
    letter-spacing: 2px;
}


.wrap-links {
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.wrap-links a {
    text-decoration: none;
    color: #ffffff;
    font-size: 25px;
    font-family: 'Norwester', Arial, sans-serif;
    transition: all 150ms ease-in-out;
}

.wrap-links a:hover {
    color: #FFFEA1;
    transform: scale(1.1);
}


section {
    min-height: 100vh;
    padding-top: 90px;
    padding-bottom: 50px;
    text-align: center;
}

/* SEÇÃO 1 */
#s1 {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
}

.wrap-banner img { width: 300px; height: auto; border-radius: 10%; }

.main-title {
    font-family: 'Norwester', Arial, sans-serif;
    font-size: 90px;
    color: #FFFEA1;
    text-shadow: 0 0 15px rgba(255,255,161,0.6);
    letter-spacing: 4px;
    margin-bottom: 10px;
}

.subtitle {
    font-family: 'Norwester', Arial, sans-serif;
    font-size: 28px;
    color: #FFFEA1;
    letter-spacing: 1px;
    text-shadow: 0 0 10px rgba(255,255,161,0.4);
}

/* SEÇÃO 2: Sephirah */
.sephirah-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-top: 30px;
}

.sephirah-box {
    background-color: rgb(40,40,40);
    padding: 15px;
    border-radius: 10px;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.sephirah-box img {
    width: 200px;           
    height: 400px;          
    object-fit: contain;   
    border-radius: 10px;
    border: 2px solid #FFFEA1;
    background-color: rgb(56,56,56);
}

.sephirah-box h3 {
    font-family: 'Norwester', Arial, sans-serif;
    font-size: 20px;
    color: #FFFEA1;
}

.sephirah-box p {
    font-family: 'Norwester', Arial, sans-serif;
    font-size: 14px;
    color: #ffffff;
    text-align: center;
}

.red{
    color: red;
    font-family: 'Norwester', Arial, sans-serif;
}
.yellow{
    color: yellow;
    font-family: 'Norwester', Arial, sans-serif;
}
.orange{
    color: orange;
    font-family: 'Norwester', Arial, sans-serif;
}




.section-title { font-family: 'Norwester', Arial, sans-serif; font-size: 50px; color: #FFFEA1; text-align: center; margin-bottom: 30px; }
.energy-content { max-width: 900px; margin: 0 auto; padding: 0 20px; display: flex; flex-direction: column; gap: 20px; }
.energy-text { font-family: 'Norwester', Arial, sans-serif; font-size: 22px; line-height: 1.8; color: #ffffff; text-align: justify; }


.energy-images { display: flex; flex-wrap: wrap; justify-content: center; gap: 30px; margin-top: 40px; }
.image-box { display: flex; flex-direction: column; align-items: center; gap: 10px; max-width: 220px; }
.image-box img { width: 200px; height: auto; border-radius: 10px; border: 2px solid #FFFEA1; padding: 5px; }
.image-box p { color: #FFFEA1; font-family: 'Norwester', Arial, sans-serif; font-size: 16px; text-align: center; }

@media (max-width: 768px) {
    nav { flex-direction: column; height: auto; padding-bottom: 15px; }
    .wrap-links { flex-wrap: wrap; }
    #s1 { flex-direction: column; text-align: center; }
    .main-title { font-size: 60px; }
    .subtitle { font-size: 22px; }
    .logo { height: 60px; width: 60px; }
    .logo-text { font-size: 24px; }
    .section-title { font-size: 38px; }
    .energy-text { font-size: 18px; line-height: 1.6; }
    .image-box img { width: 150px; }
    .image-box p, .sephirah-box p { font-size: 14px; }
}

.ego-content { max-width: 900px; margin: 0 auto; padding: 0 20px; display: flex; flex-direction: column; gap: 20px; }
.ego-text { font-family: 'Norwester', Arial, sans-serif; font-size: 22px; line-height: 1.8; color: #ffffff; text-align: justify; }
.ego-images { display: flex; flex-wrap: wrap; justify-content: center; gap: 30px; margin-top: 40px; }
