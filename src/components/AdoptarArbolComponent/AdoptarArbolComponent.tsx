import compraImage from '../../assets/compra.jpg'

const AdoptarArbolComponent = ({ tree, onAdopt }: any) => {
  return (
    
    <div className=" max-w-sm rounded overflow-hidden shadow-lg bg-white mt-5 ml-5">
      <img className="w-full h-48 object-cover" src={compraImage} alt="{tree.name}" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-green-700">name</div>
        <p className="text-gray-700 text-base">Tipo: </p>
        <p className="text-gray-700 text-base">Ubicación: </p>
        <p className="text-orange-700 font-semibold text-lg">$ precio / año</p>
        <button
          onClick={() => onAdopt(tree.id)}
          className="mt-4 w-full bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-200"
        >
          Adoptar este árbol
        </button>
      </div>
    </div>
  );
};

export default AdoptarArbolComponent;
