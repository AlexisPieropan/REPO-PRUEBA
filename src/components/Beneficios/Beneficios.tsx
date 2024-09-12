// components/BenefitsSection.tsx
import React from 'react'; 
import beneficiosImage from "./beneficios.jpg" // def. de una variable para llamar la img estatica



const Beneficios: React.FC = () => {
    
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">

        {/* HEADER o titulo */}
        <p className="text-orange-500 font-medium mb-2">Beneficios</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          ¿Por qué comprar directo del productor?
        </h2>

        {/* IMAGEN principal */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
          <div className="mb-6 md:mb-0 md:w-1/2">
            <img
              src={beneficiosImage}
              alt="BeneficiosProductor"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Texto de la seccion*/}
          <div className="md:w-1/2 text-left">
            <p className="text-gray-700 mb-4">
              Comprar directo del productor te ofrece alimentos frescos, 
              de calidad, y la oportunidad de apoyar a 
              quienes cultivan de manera sostenible. Aquí te contamos por qué es la mejor opción:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="text-green-500 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="w-5 h-5"
                  >
                    <path d="M13.485 1.929L6 9.414l-3.485-3.485-.707.707L6 10.828l8.192-8.192-.707-.707z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-bold text-gray-900">Frescura garantizada</h4>
                  <p className="text-gray-600">
                    Al comprar directo del productor, recibís alimentos recién cosechados, sin largos procesos de almacenamiento o transporte.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="text-green-500 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="w-5 h-5"
                  >
                    <path d="M13.485 1.929L6 9.414l-3.485-3.485-.707.707L6 10.828l8.192-8.192-.707-.707z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-bold text-gray-900">Apoyo a los agricultores locales</h4>
                  <p className="text-gray-600">
                    Ayudás a los pequeños productores a obtener un precio justo por su trabajo, promoviendo la economía local.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="text-green-500 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="w-5 h-5"
                  >
                    <path d="M13.485 1.929L6 9.414l-3.485-3.485-.707.707L6 10.828l8.192-8.192-.707-.707z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-bold text-gray-900">Sostenibilidad</h4>
                  <p className="text-gray-600">
                    Reducís la huella de carbono al evitar intermediarios y grandes cadenas de distribución, apoyando prácticas agrícolas más responsables.
                  </p>
                </div>
              </li>
            </ul>

            {/* Button */}
            <button className="mt-6 px-6 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition duration-300">
              Descubre más
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
