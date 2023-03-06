// Apply styles to type name
const useTypeColor = (type: string | undefined): string => {
  switch (type) {
    case "normal":
      return "bg-[#a8a878]";
    case "fire":
      return "bg-[#f08030]";
    case "water":
      return "bg-[#6890f0]";
    case "grass":
      return "bg-[#78c850]";
    case "electric":
      return "bg-[#f8d030]";
    case "ice":
      return "bg-[#98d8d8]";
    case "fighting":
      return "bg-[#c03028]";
    case "poison":
      return "bg-[#a040a0]";
    case "ground":
      return "bg-[#e0c068]";
    case "flying":
      return "bg-[#a890f0]";
    case "psychic":
      return "bg-[#f85888]";
    case "bug":
      return "bg-[#a8b820]";
    case "rock":
      return "bg-[#b8a038]";
    case "ghost":
      return "bg-[#705898]";
    case "dark":
      return "bg-[#705848]";
    case "dragon":
      return "bg-[#7038f8]";
    case "steel":
      return "bg-[#b8b8d0]";
    case "fairy":
      return "bg-[#ee99ac]";
    case "???":
      return "bg-[#68a090]";
    default:
      return "";
  }
};

export default useTypeColor;
