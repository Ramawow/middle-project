import { Box } from '@chakra-ui/react'
import ProductTableWithPagination from './ProductTableWithPagination'
import data from './data'

const FilterResult = () => {
  return (
    <>
      <Box>
        <ProductTableWithPagination unMemoizedData={data} />
      </Box>
    </>
  )
}

export default FilterResult
