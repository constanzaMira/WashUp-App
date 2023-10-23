import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import ServiceCard from "./ServiceCard";

import service1Image from "../assets/img/lavadero1.jpg";
import service2Image from "../assets/img/lavadero2.jpg";
import service3Image from "../assets/img/ImgMediaCard.jpg";

const Services = () => {
  const servicesData = [
    {
      title: "Lavado Exterior - $900",
      description: "Restaura la belleza de tu vehículo con nuestro lavado exterior. Eliminamos suciedad, polvo y manchas para devolverle su brillo original.",
      image: service1Image, // Ruta de imagen para Servicio 1
    },
    {
      title: "Lavado Interior - $750",
      description: "Refresca y renueva el interior de tu vehículo. Nuestro lavado interior incluye limpieza a fondo de tapicería, paneles y más.",
      image: service2Image, // Ruta de imagen para Servicio 2
    },
    {
      title: "Lavado Completo - $1,500",
      description: "Combina nuestro lavado exterior y lavado interior para obtener un resultado completo. Tu coche se verá y se sentirá como nuevo.",
      image: service3Image, // Ruta de imagen para Servicio 3
    },
    {
      title: "Lavado de Motor - $1,200",
      description: "Mantén tu motor limpio y funcionando sin problemas. Nuestro lavado de motor elimina la acumulación de grasa y suciedad.",
      image: service1Image,
    },
    {
      title: "Lavado de Tapicería - $850",
      description: "Cuida y renueva la tapicería de tu vehículo. Eliminamos manchas y suciedad para que tu interior luzca como nuevo.",
      image: service2Image,
    },
    {
      title: "Encerado - $1,000",
      description: "Protege la pintura de tu vehículo con nuestro encerado. Proporciona brillo y crea una barrera contra los elementos.",
      image: service3Image,
    },
    {
      title: "Limpieza de Vidrios - $500",
      description: "Mejora la visibilidad y la estética con nuestra limpieza de vidrios. Adiós a manchas y rayones en las ventanas.",
      image: service1Image,
    },
    {
      title: "Desinfección - $800",
      description: "Elimina gérmenes y bacterias con nuestra desinfección. Ideal para un ambiente saludable en tu vehículo.",
      image: service2Image,
    },
    {
      title: "Lavado Express - $600",
      description: "Un lavado rápido pero efectivo para mantener tu vehículo limpio y presentable en poco tiempo.",
      image: service3Image,
    },
  ];

  const descriptionColor = "#555";
  const titleStyle = {
    color: descriptionColor,
    marginTop: "20px",
  };
  const descriptionStyle = {
    color: descriptionColor,
  };
  const serviceCardStyle = {
    marginBottom: "20px", // Añade margen inferior a las tarjetas de servicio
  };

  return (
    <section className="services" id="services">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 style={titleStyle}>Nuestros Servicios</h2>
                  <p style={descriptionStyle}>Explora nuestra variedad de servicios personalizados.</p>
                  <Row>
                    {servicesData.map((service, index) => (
                      <Col key={index} xs={12} sm={6} md={4}>
                        <div style={serviceCardStyle}></div>
                        <ServiceCard
                          title={service.title}
                          description={service.description}
                          image={service.image} // Ruta de la imagen correspondiente
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
