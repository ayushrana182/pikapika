import React from "react";
import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Grid, Image } from "@chakra-ui/react";
import PropTypes from "prop-types";

PokemonCards.propTypes = {
  pokemon: 
    PropTypes.shape({
      count: PropTypes.number,
      next: PropTypes.string,
      previous: PropTypes.string,
      results: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          url: PropTypes.string,
        })
      ),
    })
 
};

function PokemonCards({ pokemon }) {
  console.log(pokemon.results)
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of mod pool",
    beds: 3,
    baths: 2,
    title: "Modern  in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      {/* BOX1 */}
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={property.imageUrl} alt={property.imageAlt} />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {pokemon.count} beds &bull; {pokemon.name} baths
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {property.title}
          </Box>

          <Box>
            {property.formattedPrice}
            <Box as="span" color="gray.600" fontSize="sm">
              / wk
            </Box>
          </Box>

          <Box d="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {property.reviewCount} reviews
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

export default PokemonCards;
