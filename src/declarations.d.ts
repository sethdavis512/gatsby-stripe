import { ReactNode } from 'react'
import { PageProps } from 'gatsby'

// Pages ==========
interface IndexPageProps extends PageProps {
    data: {
        allStripePrice: {
            edges: StripeNode[]
        }
    }
}

// Stripe ==========
interface StripeProduct {
    active: boolean
    description: string
    images: string[]
    name: string
}

interface StripeNode {
    node: {
        id: string
        unit_ammount: number
        product: StripeProduct
    }
}

// Cart ==========
interface CartProviderProps {
    children: ReactNode
    providerValue?: any
}
