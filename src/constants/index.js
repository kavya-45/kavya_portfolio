import project1 from "../assets/project/Ortho.jpg";
import project2 from "../assets/project/Glucoma.jpg";
import project3 from "../assets/project/registration.jpg";
import project4 from "../assets/project/Forgery.jpg";
import project5 from "../assets/project/Camouflage.jpg";

export const HERO_CONTENT = `I am a Software Engineer specializing in Image Processing, Computer Vision, and Remote Sensing with over 5 years of experience in Research and Development. My work focuses on satellite imagery, orthorectification, image registration, and Synthetic Aperture Radar (SAR). I enjoy developing intelligent solutions using Machine Learning and Deep Learning to solve real-world engineering challenges.`;

export const ABOUT_TEXT = `I hold a Bachelor's degree in Electronics and Communication Engineering and have over five years of experience in research and development. My career began with medical image processing and computer vision, and later expanded into satellite image processing, remote sensing, and radar applications. I enjoy designing practical algorithms, exploring new technologies, and continuously improving my skills in Machine Learning, Deep Learning, and Synthetic Aperture Radar (SAR).`;

export const EXPERIENCES = [
  {
    year: "Mar 2025 - Present",
    role: "Software Enginner - R&D",
    company: "Rangsons Aerospace Pvt. Ltd.",
    description:
      "Working on satellite image processing, remote sensing, computer vision, orthorectification, image registration, Synthetic Aperture Radar (SAR), radar signal processing, moving target detection, and Doppler-based velocity estimation using Python and MATLAB.",
    technologies: [
      "Python",
      "MATLAB",
      "Remote Sensing",
      "SAR",
      "Image Processing",
      "OpenCV",
    ],
  },
  {
    year: "Jan 2021 - Feb 2025",
    role: "Senior Research Programmer",
    company: "Imatiz Technologies Pvt. Ltd.",
    description:
      "Led the development of image processing solutions for healthcare and research applications, including medical image processing, image enhancement, segmentation, feature extraction, computer vision, and steganography. Developed deep learning models for glaucoma detection and image forgery detection using MATLAB and Python.",
    technologies: [
      "MATLAB",
      "Python",
      "Image Processing",
      "Computer Vision",
      "Deep Learning",
      "Medical Imaging",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Satellite Image Orthorectification",
    image: project1,
    description:
      "Developed a satellite image orthorectification workflow using Rational Polynomial Coefficient (RPC) models, Digital Elevation Models (DEM), and bilinear interpolation to generate geometrically corrected geospatial imagery.",
    technologies: [
      "Python",
      "GDAL",
      "Rasterio",
      "Remote Sensing",
      "RPC",
      "DEM",
    ],
  },
  {
    title: "Glaucoma Detection and Classification in Retinal Images",
    image: project2,
    description:
      "Designed and implemented a CNN-based deep learning model for automated glaucoma detection and classification using retinal fundus images. Performed image preprocessing, data augmentation, network training, classification, and performance evaluation using MATLAB.",
    technologies: [
      "MATLAB",
      "CNN",
      "Deep Learning Toolbox",
      "Image Processing Toolbox",
      "Retinal Image Analysis",
    ],
  },
  {
    title: "SAR and Optical Image Registration",
    image: project3,
    description:
      "Developed a multi-sensor image registration pipeline for aligning SAR and optical satellite imagery using feature-based matching, template matching, and geometric transformations to support remote sensing analysis.",
    technologies: [
      "Python",
      "OpenCV",
      "Image Registration",
      "Remote Sensing",
    ],
  },
  {
    title: "Image Forgery Detection",
    image: project4,
    description:
      "Developed image forgery detection algorithms to identify tampered digital images using image processing and feature analysis techniques. Implemented preprocessing, feature extraction, and forgery localization using MATLAB and Python.",
    technologies: [
      "MATLAB",
      "Python",
      "Image Processing",
      "Computer Vision",
    ],
  },
  {
  title: "Multi-Class Camouflage Segmentation using DeepLabV3-ResNet50",
  image: project5,
  description:
    "Designed and implemented a multi-class semantic segmentation framework using DeepLabV3-ResNet50 for camouflage object detection. The project includes dataset preprocessing, augmentation, model training, validation, inference, and visualization using PyTorch. Published as an open-source GitHub project with complete documentation.",
  technologies: [
    "Python",
    "PyTorch",
    "DeepLabV3",
    "Semantic Segmentation",
    "Computer Vision",
    "OpenCV",
  ],
},
];

export const CONTACT = {
  address: "Bengaluru, Karnataka, India",
  email: "kavyank09639@gmail.com",
};