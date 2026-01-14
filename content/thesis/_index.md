---
title: "Machine Learning Force Fields for Defective WSe2"
draft: false
cover:
  alt: "WSe2 defect & MLFF"
  caption: "Machine Learning Force Fields for Defective WSe2"
showBreadCrumbs: false
ShowReadingTime: false
hideMeta: true
---

### Based on the Equivariant Graph Neural Network MACE

---

Download my thesis as PDF [here](/files/thesis.pdf)

---

## Abstract

Single-photon emitters in two-dimensional semiconductors, such as tungsten diselenide, have emerged as promising candidates for quantum photonic applications. The microscopic origin of this effect is connected to the interplay between local strain modulations and point defects, which result in defect states within the band gap localized at the defect site, resulting in strongly localized so-called Frenkel excitons . In this thesis, the formation and characteristics of such single-photon emitters are studied using state-of-the-art machine learning force fields. In particular, the equivariant graph neural network MACE is trained on a defective structure produced by DFT calculations. This model is capable of learning interatomic interactions while preserving key symmetries, such as rotational equivariance. The MACE model is applied on strained defect configurations with the aim to capture the formation of intervalley defect excitons proposed as the microscopic origin of single emitted photons. The presented methods provide a fast and scalable way to investigate quantum phenomena caused by defects in two-dimensional materials.

---

## Highlights
- Dataset: atomic configurations obtained by DFT calculations
- Models: MACE (Equivariant Message Passing Graph Neural Network)
- Validation: energies/forces, phonon DOS/PDOS, stability checks
- Outcome: reliable and stable underlying workflow, good transfer to larger supercells

## Citation
```bibtex
@thesis{kindl2025mlff_wse2,
  title={Machine Learning Force Fields for Defective WSe2},
  author={Kindl, Sebastian},
  school={TU Wien},
  year={2025},
  type={Bachelor's Thesis}
}
