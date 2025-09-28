interface StepProps {
  stepNumber: number
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  children?: React.ReactNode
}

const Step = ({ stepNumber, title, description, imageSrc, imageAlt, children }: StepProps) => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
      <h3 className="font-semibold text-gray-900 mb-3">
        Adım {stepNumber}: {title}
      </h3>
      <p className="text-gray-600 mb-4">{description} {children}</p>
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full max-w-md h-auto rounded-lg border border-gray-200"
      />
    </div>
  )
}

export default Step