const FeatureList = ({ features }) => {
  return (
    <ul className="mt-4">
      {features.map((feature, index) => (
        <li key={index} className="mb-2">✅ {feature}</li>
      ))}
    </ul>
  );
};

export default FeatureList;
