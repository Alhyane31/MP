// @ts-nocheck
/*export const data = [
  {
    pathology_name: 'Pathologies broncho-pulmonaires, pleurales',
    pathology_types: [
      {
        name: 'Cancer broncho-pulmonaire primitif',
        agents: [
          {
            name: 'Acide chromique et les chromates et\nbichromates alcalins ou alcalino-terreux ainsi que par le chromate de zinc',
            path: '19 TER.pdf',
            n_table: '1.1.19 ter',
          },
          {
            name: 'Charbon',
            path: 'CHARBON.pdf',
            n_table: '1.1.15',
          },
          {
            name: 'Mines de fer',
            path: 'MINES FER.pdf',
            n_table: '1.1.17 bis',
          },
          {
            name: "Poussières d'amiante",
            path: '1113.pdf',
            n_table: '1.1.13',
          },
          {
            name: 'Poussières de cobalt associées au carbure de tungstène avant frittage. ',
            path: '114TER.pdf',
            n_table: '1.1.4 ter',
          },
              {
                name: "Silice cristalline, silicates cristallins, graphite ou houille",
                path: '1112.pdf',
                n_table: '1.1.12',
              },
            
        ],
      },
      {
        name: 'Asthme',
        agents: [
          {
            name: 'Acide chromique, chromates et bichromates alcalins',
            path: '1119BIS.pdf',
            n_table: '1.1.19 bis',
          },
          {
            name: 'Aldéhyde formique et ses polymères ',
            path: '128.pdf',
            n_table: '1.2.8',
          },
          {
            name: "Amines aliphatiques, les éthanolamines ou l'isophoronediamine ",
            path: '1211BIS.pdf',
            n_table: '1.2.11 bis',
          },
          {
            name: 'Amines aromatiques, leurs sels et leurs dérivés notamment hydroxylés, halogénés, nitrés, nitrosés et sulfonés ',
            path: '1210.pdf',
            n_table: '1.2.10',
          },
          {
            name: 'Animaux ( y compris arthropodes et larves)',
            path: '181.pdf',
            n_table: '1.8.1',
          },
          {
            name: 'Bétalactamines (Pénicillines et leurs sels ) et les céphalosporines',
            path: '152.pdf',
            n_table: '1.5.2',
          },
          {
            name: 'Carmin',
            path: '181.pdf',
            n_table: '1.8.1',
          },
          {
            name: 'Cobalt et ses composés',
            path: '114.pdf',
            n_table: '1.1.4',
          },
          {
            name: 'Duvets',
            path: '181.pdf',
            n_table: '1.8.1',
          },
          {
            name: 'Ensachage de grains de céréales',
            path: '181.pdf',
            n_table: '1.8.1',
          },
          {
            name: 'Enzymes ',
            path: '154.pdf',
            n_table: '1.5.4',
          },
          {
            name: 'Farines',
            path: '181.pdf',
            n_table: '1.8.1',
          },
          {
            name: 'Feutres naturels',
            path: '181.pdf',
            n_table: '1.8.1',
          },
          {
            name: "Filature et tissage de textiles d'origine végétale",
            path: '181.pdf',
            n_table: '1.8.1',
          },
          {
            name: 'Fongicides ',
            path: '181.pdf',
            n_table: '1.8.1',
          },
          {
            name: 'Fourrures',
            path: '181.pdf',
            n_table: '1.8.1',
          },
          {
            name: "Furfural et l'alcool furfurylique ",
            path: '181.pdf',
            n_table: '1.2.19',
          },
          {
            name: 'Grains de céréales',
            path: '181.pdf',
            n_table: '1.8.1',
          },
          {
            name: 'Henné',
            path: '181.pdf',
            n_table: '1.8.1',
          },
          {
            name: "Huile d'ambrette",
            path: '181.pdf',
            n_table: '1.8.1',
          },
          {
            name: 'Huile de ricin ',
            path: '181.pdf',
            n_table: '1.8.1',
          },
          {
            name: "Inhalation d'anhydrides d'acides volatiles",
            path: '181.pdf',
            n_table: '1.8.1',
          },
          {
            name: 'Ipéca',
            path: '181.pdf',
            n_table: '1.8.1',
          },
          {
            name: 'Isocyanates organiques ',
            path: '132.pdf',
            n_table: '1.3.2',
          },
          {
            name: 'Lycopode',
            path: '181.pdf',
            n_table: '1.8.1',
          },
          {
            name: 'Méthacrylate de méthyle ',
            path: '1217.pdf',
            n_table: '1.2.17',
          },
          {
            name: 'Ouvertures des balles',
            path: '181.pdf',
            n_table: '1.8.1',
          },
          {
            name: 'Peignage',
            path: '181.pdf',
            n_table: '1.8.1',
          },
          {
            name: 'Phénylhyarazine ',
            path: '1221.pdf',
            n_table: '1.2.21',
          },
          {
            name: 'Plumes',
            path: '181.pdf',
            n_table: '1.8.1',
          },
          {
            name: 'Pollens',
            path: '181.pdf',
            n_table: '1.8.1',
          },
          {
            name: "Poudre d'insecte",
            path: '181.pdf',
            n_table: '1.8.1',
          },
          {
            name: 'Poussières de bois ',
            path: '162.pdf',
            n_table: '1.6.2',
          },
          {
            name: 'Protéine en aérosol',
            path: '181.pdf',
            n_table: '1.8.1',
          },
          {
            name: 'Protéines du latex (ou caoutchouc naturel) ',
            path: '163.pdf',
            n_table: '1.6.3',
          },
          {
            name: 'Quinine',
            path: '181.pdf',
            n_table: '1.8.1',
          },
          {
            name: "Résidus d'extraction d'huiles",
            path: '181.pdf',
            n_table: '1.8.1',
          },
          {
            name: 'Séricine',
            path: '181.pdf',
            n_table: '1.8.1',
          },
          {
            name: 'Spores',
            path: '181.pdf',
            n_table: '1.8.1',
          },
        ],
      },
      {
        name: 'Broncho-pneumonie',
        agents: [
          {
            name: "Agents infectieux ou parasitaires contractées en milieu d'hospitalisation et d'hospitalisation à domicile (staphylocoques, pseudomonas aeroginosa, enterocoque, méningocoque, strepto béta-hémolytique, fièvre typhoϊde A et B, choléra, fièvre hémorragique, herpes, syphilis, gale, gonocoque)",
            path: '310.pdf',
            n_table: '3.10',
          },
        ],
      },
      {
        name: 'Pneumonie',
        agents: [
          {
            name: "Agents infectieux ou parasitaires contractées en milieu d'hospitalisation et d'hospitalisation à domicile (staphylocoques, pseudomonas aeroginosa, enterocoque, méningocoque, strepto béta-hémolytique, fièvre typhoϊde A et B, choléra, fièvre hémorragique, herpes, syphilis, gale, gonocoque)",
            path: '310.pdf',
            n_table: '3.10',
          },
        ],
      },
      {
        name: 'Broncho-pneumopathie subaiguë',
        agents: [
          {
            name: 'Antimoine et ses dérivés',
            path: '1121.pdf',
            n_table: '1.1.21',
          },
          {
            name: 'Béryllium et à ses composés ',
            path: '115.pdf',
            n_table: '1.1.5',
          },
          {
            name: "Pneumopathies d'hypersensibilité ",
            path: '182.pdf',
            n_table: '1.8.2',
          },
          {
            name: 'Poussières de carbures métalliques frittés ou fondus contenant du cobalt. ',
            path: '114BIS.pdf',
            n_table: '1.1.4 bis',
          },
          {
            name: 'Sélénium et ses dérivés minéraux',
            path: '120.pdf',
            n_table: '1.1.20',
          },
          {
            name: 'Spirochétoses ',
            path: '34.pdf',
            n_table: '3.4',
          },
          {
            name: 'Tularémie ',
            path: '316.pdf',
            n_table: '3.16',
          },
        ],
      },
      {
        name: 'Stibiose',
        agents: [
          {
            name: 'Antimoine et ses dérivés',
            path: '1121.pdf',
            n_table: '1.1.21',
          },
        ],
      },
      {
        name: 'Dyspnée aigue',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
          {
            name: "Poussières d'amiante",
            path: '1113.pdf',
            n_table: '1.1.13',
          },
        ],
      },
      {
        name: 'Tuberculose pleurale',
        agents: [
          {
            name: 'Bacilles tuberculeux et à certaines mycobactéries atypiques : Mycobacterium avium/intracellulaire, Mycobacterium kansasii, Mycobacterium xenopi, Mycobacterium marinum, Mycobacterium fortuitum ',
            path: '39.pdf',
            n_table: '3.9',
          },
        ],
      },
      {
        name: 'Tuberculose pulmonaire',
        agents: [
          {
            name: 'Bacilles tuberculeux et à certaines mycobactéries atypiques : Mycobacterium avium/intracellulaire, Mycobacterium kansasii, Mycobacterium xenopi, Mycobacterium marinum, Mycobacterium fortuitum ',
            path: '39.pdf',
            n_table: '3.9',
          },
        ],
      },
      {
        name: 'Broncho-pneumopathie aigue',
        agents: [
          {
            name: 'Béryllium et à ses composés ',
            path: '115.pdf',
            n_table: '1.1.5',
          },
          {
            name: 'Ornithose Psittacose ',
            path: '37.pdf',
            n_table: '3.7',
          },
          {
            name: "Pneumopathies d'hypersensibilité ",
            path: '182.pdf',
            n_table: '1.8.2',
          },
        ],
      },
      {
        name: 'Fibrose pulmonaire',
        agents: [
          {
            name: 'Béryllium et à ses composés ',
            path: '115.pdf',
            n_table: '1.1.5',
          },
          {
            name: "Pneumopathies d'hypersensibilité ",
            path: '182.pdf',
            n_table: '1.8.2',
          },
          {
            name: "Poussières d'amiante",
            path: '1113.pdf',
            n_table: '1.1.13',
          },
          {
            name: 'Poussières de bois ',
            path: '162.pdf',
            n_table: '1.6.2',
          },
          {
            name: 'Poussières de carbures métalliques frittés ou fondus contenant du cobalt. ',
            path: '114BIS.pdf',
            n_table: '1.1.4 bis',
          },
        ],
      },
      {
        name: 'Pneumothorax spontané',
        agents: [
          {
            name: 'Béryllium et à ses composés ',
            path: '115.pdf',
            n_table: '1.1.5',
          },
          {
            name: "Silice cristalline, silicates cristallins, graphite ou houille",
            path: '1112.pdf',
            n_table: '1.1.12',
          }
        ],
      },
      {
        name: 'Dyspnée asthmatiforme',
        agents: [
          {
            name: 'Bétalactamines (Pénicillines et leurs sels ) et les céphalosporines',
            path: '152.pdf',
            n_table: '1.5.2',
          },
          {
            name: "Phosphates, les pyrophosphates et thiophosphates d'alcoyle, d'aryle ou d'alcoylaryle et autres organophosphorés anticholinéstérasiques ainsi que par les phosphoramides et car bamates hétérocycliques anticholinéstérasiques ",
            path: '142.pdf',
            n_table: '1.4.2',
          },
        ],
      },
      {
        name: 'Cancer bronchique primitif',
        agents: [
          {
            name: 'Bis (Chlorométhyle) éther ',
            path: '1218.pdf',
            n_table: '1.2.18',
          },
          {
            name: 'Grillage des mattes de nickel',
            path: 'matte_20.pdf',
            n_table: '1.1.8 ter',
          },
        ],
      },
      {
        name: 'Bronchite',
        agents: [
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
        ],
      },
      {
        name: 'Pleurésie séro-fibrineuse',
        agents: [
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
        ],
      },
      {
        name: 'Bronchopneumopathies aigues',
        agents: [
          {
            name: 'Cadmium et ses composés',
            path: 'CADMIUM.pdf',
            n_table: '1.1.14',
          },
          {
            name: 'Fluor, acide fluorhydrique et ses sels minéraux',
            path: 'fluor.pdf',
            n_table: '1.1.10',
          },
        ],
      },
      {
        name: 'Broncho-pneumopathie chronique obstructive',
        agents: [
          {
            name: 'Charbon',
            path: 'CHARBON.pdf',
            n_table: '1.1.15',
          },
          {
            name: 'Charbon professionnel ',
            path: '33.pdf',
            n_table: '3.3',
          },
          {
            name: 'Cobalt et ses composés',
            path: '114.pdf',
            n_table: '1.1.4',
          },
          {
            name: 'Fer',
            path: 'fer.pdf',
            n_table: '1.1.16',
          },
          {
            name: 'Poussières textiles végétales ',
            path: '161.pdf',
            n_table: '1.6.1',
          },
        ],
      },
      {
        name: 'Charbon pulmonaire',
        agents: [
          {
            name: 'Charbon professionnel ',
            path: '33.pdf',
            n_table: '3.3',
          },
        ],
      },
      {
        name: 'Dyspnée asthmatiforme',
        agents: [
          {
            name: 'Cobalt et ses composés',
            path: '114.pdf',
            n_table: '1.1.4',
          },
        ],
      },
      {
        name: 'Insuffisance respiratoire chronique',
        agents: [
          {
            name: 'Cobalt et ses composés',
            path: '114.pdf',
            n_table: '1.1.4',
          },
        ],
      },
      {
        name: 'Irritation des voies aériennes supérieures',
        agents: [
          {
            name: "Dérivés nitrés du phénol (dinitrophénols,dinitro-orthocrésol, dinoseb), par le pentachlorophénol, les pentachlorophénates et par les dérivés halogènes de l'hydroxybenzonitrile (bromoxynil, ioxynil) ",
            path: '126.pdf',
            n_table: '1.2.6',
          },
        ],
      },
      {
        name: 'Atteinte irritative des voies aériennes supérieures',
        agents: [
          {
            name: 'Fluor, acide fluorhydrique et ses sels minéraux',
            path: 'fluor.pdf',
            n_table: '1.1.10',
          },
        ],
      },
      {
        name: 'Œdème aigu du poumon',
        agents: [
          {
            name: 'Fluor, acide fluorhydrique et ses sels minéraux',
            path: 'fluor.pdf',
            n_table: '1.1.10',
          },
        ],
      },
      {
        name: 'Granulome pulmonaire',
        agents: [
          {
            name: "Huiles et graisses d'origine minérale ou de synthèse ",
            path: '125;.pdf',
            n_table: '1.2.5',
          },
        ],
      },
      {
        name: 'Insuffisance respiratoire',
        agents: [
          {
            name: "Huiles et graisses d'origine minérale ou de synthèse ",
            path: '125;.pdf',
            n_table: '1.2.5',
          },
        ],
      },
      {
        name: 'Pneumopathie interstitielle subaiguë',
        agents: [
          {
            name: 'Isocyanates organiques ',
            path: '132.pdf',
            n_table: '1.3.2',
          },
        ],
      },
      {
        name: "Pneumopathie d'hypersensibilité",
        agents: [
          {
            name: 'Isocyanates organiques ',
            path: '132.pdf',
            n_table: '1.3.2',
          },
        ],
      },
      {
        name: 'Pneumopathie interstitielle aigue',
        agents: [
          {
            name: 'Isocyanates organiques ',
            path: '132.pdf',
            n_table: '1.3.2',
          },
        ],
      },
      {
        name: 'Syndrome bronchique récidivant',
        agents: [
          {
            name: 'Isocyanates organiques ',
            path: '132.pdf',
            n_table: '1.3.2',
          },
        ],
      },
      {
        name: 'Troubles pulmonaires: manganisme',
        agents: [
          {
            name: 'Manganèse',
            path: '113.pdf',
            n_table: '1.1.3',
          },
        ],
      },
      {
        name: 'Emphysème',
        agents: [
          {
            name: 'Mines de fer',
            path: 'MINES FER.pdf',
            n_table: '1.1.17 bis',
          },
          {
            name: 'Poussière de fer',
            path: 'POUSSIERE FER.pdf',
            n_table: '1.1.17',
          },
        ],
      },
      {
        name: 'Œdème broncho-alvéolaire',
        agents: [
          {
            name: "Phosphates, les pyrophosphates et thiophosphates d'alcoyle, d'aryle ou d'alcoylaryle et autres organophosphorés anticholinéstérasiques ainsi que par les phosphoramides et car bamates hétérocycliques anticholinéstérasiques ",
            path: '142.pdf',
            n_table: '1.4.2',
          },
        ],
      },
      {
        name: 'Sidérose : pneumopathie interstitielle diffuse',
        agents: [
          {
            name: 'Poussière de fer',
            path: 'POUSSIERE FER.pdf',
            n_table: '1.1.17',
          },
        ],
      },
      {
        name: 'Lésions pleurales bénignes',
        agents: [
          {
            name: "Poussières d'amiante",
            path: '1113.pdf',
            n_table: '1.1.13',
          },
        ],
      },
      {
        name: 'Mésothéliome',
        agents: [
          {
            name: "Poussières d'amiante",
            path: '1113.pdf',
            n_table: '1.1.13',
          },
        ],
      },
      {
        name: 'Pleurésie exsudative',
        agents: [
          {
            name: "Poussières d'amiante",
            path: '1113.pdf',
            n_table: '1.1.13',
          },
        ],
      },
      {
        name: 'Expectorations',
        agents: [
          {
            name: 'Poussières de bois ',
            path: '162.pdf',
            n_table: '1.6.2',
          },
        ],
      },
      {
        name: 'Toux ',
        agents: [
          {
            name: 'Poussières de bois ',
            path: '162.pdf',
            n_table: '1.6.2',
          },
          {
            name: 'Poussières de carbures métalliques frittés ou fondus contenant du cobalt. ',
            path: '114BIS.pdf',
            n_table: '1.1.4 bis',
          },
        ],
      },
      {
        name: 'Broncho-alvéolite aigue',
        agents: [
          {
            name: 'Poussières de carbures métalliques frittés ou fondus contenant du cobalt. ',
            path: '114BIS.pdf',
            n_table: '1.1.4 bis',
          },
        ],
      },
      {
        name: 'Broncho-alvéolite subaiguë',
        agents: [
          {
            name: 'Poussières de carbures métalliques frittés ou fondus contenant du cobalt. ',
            path: '114BIS.pdf',
            n_table: '1.1.4 bis',
          },
        ],
      },
      {
        name: 'Dyspnée',
        agents: [
          {
            name: 'Poussières de carbures métalliques frittés ou fondus contenant du cobalt. ',
            path: '114BIS.pdf',
            n_table: '1.1.4 bis',
          },
        ],
      },
      {
        name: 'Infection pulmonaire',
        agents: [
          {
            name: 'Poussières de carbures métalliques frittés ou fondus contenant du cobalt. ',
            path: '114BIS.pdf',
            n_table: '1.1.4 bis',
          },
        ],
      },
      {
        name: 'Syndrome irritatif',
        agents: [
          {
            name: 'Poussières de carbures métalliques frittés ou fondus contenant du cobalt. ',
            path: '114BIS.pdf',
            n_table: '1.1.4 bis',
          },
        ],
      },
      {
        name: 'Syndrome obstructif aigu',
        agents: [
          {
            name: 'Poussières textiles végétales ',
            path: '161.pdf',
            n_table: '1.6.1',
          },
        ],
      },
      {
        name: 'Affections des voies aériennes',
        agents: [
          {
            name: 'Sélénium et ses dérivés minéraux',
            path: '120.pdf',
            n_table: '1.1.20',
          },
        ],
      },
      {
        name: 'Œdème pulmonaire',
        agents: [
          {
            name: 'Sélénium et ses dérivés minéraux',
            path: '120.pdf',
            n_table: '1.1.20',
          },
        ],
      },{
        name: 'Silicose aigue ',
        agents: [
          {
            name: "Silice cristalline, silicates cristallins, graphite ou houille",
            path: '1112.pdf',
            n_table: '1.1.12',
          },
        ],
      },{
        name: 'Silicose chronique ',
        agents: [
          {
            name: "Silice cristalline, silicates cristallins, graphite ou houille",
            path: '1112.pdf',
            n_table: '1.1.12',
          },
        ],
      },{
        name: 'Tuberculose ou autre mycobactériose (complication)',
        agents: [
          {
            name: "Silice cristalline, silicates cristallins, graphite ou houille",
            path: '1112.pdf',
            n_table: '1.1.12',
          },
        ],
      },{
        name: 'Surinfection ou suppuration bactérienne broncho-pulmonaire subaiguë ou chronique (complication)',
        agents: [
          {
            name: "Silice cristalline, silicates cristallins, graphite ou houille",
            path: '1112.pdf',
            n_table: '1.1.12',
          },
        ],
      },{
        name: 'Kaolinose',
        agents: [
          {
            name: "Silice cristalline, silicates cristallins, graphite ou houille",
            path: '1112.pdf',
            n_table: '1.1.12',
          },
        ],
      },{
        name: 'Talcose',
        agents: [
          {
            name: "Silice cristalline, silicates cristallins, graphite ou houille",
            path: '1112.pdf',
            n_table: '1.1.12',
          },
        ],
      },{
        name: 'Graphitose',
        agents: [
          {
            name: "Silice cristalline, silicates cristallins, graphite ou houille",
            path: '1112.pdf',
            n_table: '1.1.12',
          },
        ],
      },
    ],
  },
  {
    pathology_name: 'Pathologies ophtalmologiques, ORL et stomatologiques',
    pathology_types: [
      {
        name: 'Cancer des cavités nasales',
        agents: [
          {
            name: 'Acide chromique et les chromates et\nbichromates alcalins ou alcalino-terreux ainsi que par le chromate de zinc',
            path: '19 TER.pdf',
            n_table: '1.1.19 ter',
          },
        ],
      },
      {
        name: 'Rhinite recidivante',
        agents: [
          {
            name: 'Acide chromique, chromates et bichromates alcalins',
            path: '1119BIS.pdf',
            n_table: '1.1.19 bis',
          },
          {
            name: 'Aldéhyde formique et ses polymères ',
            path: '128.pdf',
            n_table: '1.2.8',
          },
          {
            name: "Amines aliphatiques, les éthanolamines ou l'isophoronediamine ",
            path: '1211BIS.pdf',
            n_table: '1.2.11 bis',
          },
          {
            name: 'Amines aromatiques, leurs sels et leurs dérivés notamment hydroxylés, halogénés, nitrés, nitrosés et sulfonés ',
            path: '1210.pdf',
            n_table: '1.2.10',
          },
          {
            name: 'Cobalt et ses composés',
            path: '114.pdf',
            n_table: '1.1.4',
          },
          {
            name: "Furfural et l'alcool furfurylique ",
            path: '181.pdf',
            n_table: '1.2.19',
          },
          {
            name: 'Hydrocarbures liquides aliphatiques, alicycliques, hétérocycliques et aromatiques, et leurs mélanges (white spirit, essences spéciales) ; dérivés nitrés des hydrocarbures aliphatiques ; acétonitrile ; alcools, aldéhydes, cétone, esters, éthers dont le tétrahydrofurane, glycols et leurs éthers ; diméthylformamide, diméthylsulfoxyde ',
            path: '1220.pdf',
            n_table: '1.2.20',
          },
          {
            name: 'Phénylhyarazine ',
            path: '1221.pdf',
            n_table: '1.2.21',
          },
        ],
      },
      {
        name: 'Ulcérations Nasales',
        agents: [
          {
            name: 'Acide chromique, chromates et bichromates alcalins, chromates de zinc et sulfate de chrome',
            path: 'chromates.pdf',
            n_table: '1.1.19',
          },
          {
            name: "Agents infectieux ou parasitaires contractées en milieu d'hospitalisation et d'hospitalisation à domicile (staphylocoques, pseudomonas aeroginosa, enterocoque, méningocoque, strepto béta-hémolytique, fièvre typhoϊde A et B, choléra, fièvre hémorragique, herpes, syphilis, gale, gonocoque)",
            path: '310.pdf',
            n_table: '3.10',
          },
          {
            name: 'Chlorure de sodium',
            path: 'cc.pdf',
            n_table: '1.1.18',
          },
        ],
      },
      {
        name: 'Atteinte auriculaire',
        agents: [
          {
            name: "Agents infectieux ou parasitaires contractées en milieu d'hospitalisation et d'hospitalisation à domicile (staphylocoques, pseudomonas aeroginosa, enterocoque, méningocoque, strepto béta-hémolytique, fièvre typhoϊde A et B, choléra, fièvre hémorragique, herpes, syphilis, gale, gonocoque)",
            path: '310.pdf',
            n_table: '3.10',
          },
        ],
      },
      {
        name: 'Conjonctivite',
        agents: [
          {
            name: "Agents infectieux ou parasitaires contractées en milieu d'hospitalisation et d'hospitalisation à domicile (staphylocoques, pseudomonas aeroginosa, enterocoque, méningocoque, strepto béta-hémolytique, fièvre typhoϊde A et B, choléra, fièvre hémorragique, herpes, syphilis, gale, gonocoque)",
            path: '310.pdf',
            n_table: '3.10',
          },
          {
            name: "Agents infectieux ou parasitaires contractées en milieu d'hospitalisation et d'hospitalisation à domicile (staphylocoques, pseudomonas aeroginosa, enterocoque, méningocoque, strepto béta-hémolytique, fièvre typhoϊde A et B, choléra, fièvre hémorragique, herpes, syphilis, gale, gonocoque)",
            path: '310.pdf',
            n_table: '3.10',
          },
          {
            name: 'Béryllium et ses composés',
            path: '115.pdf',
            n_table: '1.1.5',
          },
          {
            name: 'Chlorpromazine (Largactyl)',
            path: '153.pdf',
            n_table: '1.5.3',
          },
          {
            name: 'Ciments ( Amino-silicates de calcium)',
            path: 'ciment.pdf',
            n_table: '1.1.11',
          },
          {
            name: "Dérivés nitrés du phénol (dinitrophénols,dinitro-orthocrésol, dinoseb), par le pentachlorophénol, les pentachlorophénates et par les dérivés halogènes de l'hydroxybenzonitrile (bromoxynil, ioxynil) ",
            path: '126.pdf',
            n_table: '1.2.6',
          },
          {
            name: 'Enzymes ',
            path: '154.pdf',
            n_table: '1.5.4',
          },
          {
            name: "Furfural et l'alcool furfurylique ",
            path: '181.pdf',
            n_table: '1.2.19',
          },
          {
            name: 'Goudrons de houille, les huiles de houille (comprenant les fractions de distillations dites phénoliques, naphtaléniques, acénaphténiques, anthracéniques et chryséniques), les brais ',
            path: '1222.pdf',
            n_table: '1.2.22',
          },
          {
            name: 'Hydrocarbures liquides aliphatiques, alicycliques, hétérocycliques et aromatiques, et leurs mélanges (white spirit, essences spéciales) ; dérivés nitrés des hydrocarbures aliphatiques ; acétonitrile ; alcools, aldéhydes, cétone, esters, éthers dont le tétrahydrofurane, glycols et leurs éthers ; diméthylformamide, diméthylsulfoxyde ',
            path: '1220.pdf',
            n_table: '1.2.20',
          },
          {
            name: 'Méthacrylate de méthyle ',
            path: '1217.pdf',
            n_table: '1.2.17',
          },
          {
            name: 'Poussières de bois ',
            path: '162.pdf',
            n_table: '1.6.2',
          },
          {
            name: 'Protéines du latex (ou caoutchouc naturel) ',
            path: '163.pdf',
            n_table: '1.6.3',
          },
          {
            name: 'Rayonnements ionisants ',
            path: '21.pdf',
            n_table: '2.1',
          },
          {
            name: 'Sélénium et ses dérivés minéraux',
            path: '120.pdf',
            n_table: '1.1.20',
          },
        ],
      },
      {
        name: 'Otite moyenne subaiguë ou chronique',
        agents: [
          {
            name: "Agents infectieux ou parasitaires contractées en milieu d'hospitalisation et d'hospitalisation à domicile (staphylocoques, pseudomonas aeroginosa, enterocoque, méningocoque, strepto béta-hémolytique, fièvre typhoϊde A et B, choléra, fièvre hémorragique, herpes, syphilis, gale, gonocoque)",
            path: '310.pdf',
            n_table: '3.10',
          },
          {
            name: 'Pression est inférieure à la pression atmosphérique et soumise à variations ',
            path: '212.pdf',
            n_table: '2.12',
          },
          {
            name: 'Pression est supérieure à la pression atmosphérique ',
            path: '211.pdf',
            n_table: '2.11',
          },
        ],
      },
      {
        name: 'Blépharo-conjonctivite',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
          {
            name: 'Particules en circulation dans les puits de mine de charbon ',
            path: '23.pdf',
            n_table: '2.3',
          },
        ],
      },
      {
        name: 'Kératite ',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
        ],
      },
      {
        name: 'Stomatite',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
        ],
      },
      {
        name: 'Rhinite',
        agents: [
          {
            name: 'Bétalactamines (Pénicillines et leurs sels ) et les céphalosporines',
            path: '152.pdf',
            n_table: '1.5.2',
          },
          {
            name: 'Enzymes ',
            path: '154.pdf',
            n_table: '1.5.4',
          },
          {
            name: 'Isocyanates organiques ',
            path: '132.pdf',
            n_table: '1.3.2',
          },
          {
            name: 'Méthacrylate de méthyle ',
            path: '1217.pdf',
            n_table: '1.2.17',
          },
          {
            name: 'Protéines du latex (ou caoutchouc naturel) ',
            path: '163.pdf',
            n_table: '1.6.3',
          },
        ],
      },
      {
        name: 'Amaurose',
        agents: [
          {
            name: 'Bromure de méthyle',
            path: '1215.pdf',
            n_table: '1.2.15',
          },
        ],
      },
      {
        name: 'Amblyopie',
        agents: [
          {
            name: 'Bromure de méthyle',
            path: '1215.pdf',
            n_table: '1.2.15',
          },
          {
            name: 'Chlorure de méthyle ',
            path: '1216.pdf',
            n_table: '1.2.16',
          },
        ],
      },
      {
        name: 'Diplopie',
        agents: [
          {
            name: 'Bromure de méthyle',
            path: '1215.pdf',
            n_table: '1.2.15',
          },
        ],
      },
      {
        name: 'Hyperacousie',
        agents: [
          {
            name: 'Bromure de méthyle',
            path: '1215.pdf',
            n_table: '1.2.15',
          },
          {
            name: 'Bruits lésionnels ',
            path: '25.pdf',
            n_table: '2.5',
          },
        ],
      },
      {
        name: 'Troubles labyrinthiques',
        agents: [
          {
            name: 'Bromure de méthyle',
            path: '1215.pdf',
            n_table: '1.2.15',
          },
        ],
      },
      {
        name: 'Vertiges',
        agents: [
          {
            name: 'Bromure de méthyle',
            path: '1215.pdf',
            n_table: '1.2.15',
          },
        ],
      },
      {
        name: 'Acouphènes',
        agents: [
          {
            name: 'Bruits lésionnels ',
            path: '25.pdf',
            n_table: '2.5',
          },
        ],
      },
      {
        name: 'Perforations nasales',
        agents: [
          {
            name: 'Chlorure de sodium',
            path: 'cc.pdf',
            n_table: '1.1.18',
          },
        ],
      },
      {
        name: 'Blépharite',
        agents: [
          {
            name: 'Ciments ( Amino-silicates de calcium)',
            path: 'ciment.pdf',
            n_table: '1.1.11',
          },
          {
            name: 'Rayonnements ionisants ',
            path: '21.pdf',
            n_table: '2.1',
          },
        ],
      },
      {
        name: 'Blépharo-conjonctivite récidivante',
        agents: [
          {
            name: 'Isocyanates organiques ',
            path: '132.pdf',
            n_table: '1.3.2',
          },
        ],
      },
      {
        name: 'Conjonctivite oedémateuse',
        agents: [
          {
            name: 'Kératoconjonctivites virales ',
            path: '36.pdf',
            n_table: '3.6',
          },
        ],
      },
      {
        name: 'Kératite nummulaire sous épithéliale',
        agents: [
          {
            name: 'Kératoconjonctivites virales ',
            path: '36.pdf',
            n_table: '3.6',
          },
        ],
      },
      {
        name: 'Conjonctivite folliculaire',
        agents: [
          {
            name: 'Kératoconjonctivites virales ',
            path: '36.pdf',
            n_table: '3.6',
          },
        ],
      },
      {
        name: 'Conjonctivite hémorragique',
        agents: [
          {
            name: 'Kératoconjonctivites virales ',
            path: '36.pdf',
            n_table: '3.6',
          },
        ],
      },
      {
        name: 'Kératite superficielle ulcéreuse',
        agents: [
          {
            name: 'Kératoconjonctivites virales ',
            path: '36.pdf',
            n_table: '3.6',
          },
        ],
      },
      {
        name: 'Nécrose du maxillaire inférieur',
        agents: [
          {
            name: 'Phosphore et sesquisulfure de phosphore',
            path: 'phspho.pdf',
            n_table: '1.1.9',
          },
        ],
      },
      {
        name: 'Lésion oreille interne',
        agents: [
          {
            name: 'Pression est inférieure à la pression atmosphérique et soumise à variations ',
            path: '212.pdf',
            n_table: '2.12',
          },
        ],
      },
      {
        name: 'Hypoacousie',
        agents: [
          {
            name: 'Pression est supérieure à la pression atmosphérique ',
            path: '211.pdf',
            n_table: '2.11',
          },
        ],
      },
      {
        name: 'Syndrome vertigineux',
        agents: [
          {
            name: 'Pression est supérieure à la pression atmosphérique ',
            path: '211.pdf',
            n_table: '2.11',
          },
        ],
      },
      {
        name: 'Cataracte',
        agents: [
          {
            name: 'Rayonnement thermique ',
            path: '22.pdf',
            n_table: '2.2',
          },
          {
            name: 'Rayonnements ionisants ',
            path: '21.pdf',
            n_table: '2.1',
          },
        ],
      },
      {
        name: 'Ptérygion',
        agents: [
          {
            name: 'Rayonnement thermique associé aux poussières ',
            path: '22 BIS.pdf',
            n_table: '2.2 BIS',
          },
        ],
      },
      {
        name: 'Kératite',
        agents: [
          {
            name: 'Rayonnements ionisants ',
            path: '21.pdf',
            n_table: '2.1',
          },
        ],
      },
      {
        name: 'Brulures oculaires',
        agents: [
          {
            name: 'Sélénium et ses dérivés minéraux',
            path: '120.pdf',
            n_table: '1.1.20',
          },
        ],
      },
      {
        name: 'Névrite optique',
        agents: [
          {
            name: 'Sulfocarbonisme ',
            path: '1223.pdf',
            n_table: '1.2.23',
          },
        ],
      },
    ],
  },
  {
    pathology_name: 'Cancers',
    pathology_types: [
      {
        name: 'Cancer broncho-pulmonaire primitif',
        agents: [
          {
            name: 'Acide chromique et les chromates et\nbichromates alcalins ou alcalino-terreux ainsi que par le chromate de zinc',
            path: '19 TER.pdf',
            n_table: '1.1.19 ter',
          },
          {
            name: 'Poussières de cobalt associées au carbure de tungstène avant frittage. ',
            path: '114TER.pdf',
            n_table: '1.1.4 ter',
          },
          {
            name: 'Poussières de cobalt associées au carbure de tungstène avant frittage. ',
            path: '114TER.pdf',
            n_table: '1.1.4 ter',
          },
          {
            name: 'Rayonnements ionisants ',
            path: '21.pdf',
            n_table: '2.1',
          },
        ],
      },
      {
        name: 'Cancer des cavités nasales',
        agents: [
          {
            name: 'Acide chromique et les chromates et\nbichromates alcalins ou alcalino-terreux ainsi que par le chromate de zinc',
            path: '19 TER.pdf',
            n_table: '1.1.19 ter',
          },
          {
            name: 'Poussières de bois ',
            path: '162.pdf',
            n_table: '1.6.2',
          },
        ],
      },
      {
        name: 'Angiosarcome du foie',
        agents: [
          {
            name: 'Aldéhyde formique et ses polymères ',
            path: '128.pdf',
            n_table: '1.2.8',
          },
        ],
      },
      {
        name: 'Carcinome du nasopharynx',
        agents: [
          {
            name: 'Aldéhyde formique et ses polymères ',
            path: '128.pdf',
            n_table: '1.2.8',
          },
        ],
      },
      {
        name: "Lésion primitive de l'épithélium vésical",
        agents: [
          {
            name: 'Amines aromatiques et leurs sels et la N-Nitroso-dibutylamine et ses sels ',
            path: '1210TER.pdf',
            n_table: '1.2.10 ter',
          },
        ],
      },
      {
        name: 'Lésions primitives de l’épithélium vésical',
        agents: [
          {
            name: 'Amines aromatiques et leurs sels et la N-Nitroso-dibutylamine et ses sels ',
            path: '1210TER.pdf',
            n_table: '1.2.10 ter',
          },
        ],
      },
      {
        name: 'Adénocarcinome hépatocellulaire',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
        ],
      },
      {
        name: 'Cancer bronchique primitif',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
          {
            name: 'Bis (Chlorométhyle) éther ',
            path: '1218.pdf',
            n_table: '1.2.18',
          },
          {
            name: 'Goudrons de houille, les huiles de houille, les brais de houille et les suies de combustion du charbon ',
            path: '1222BIS.pdf',
            n_table: '1.2.22 BIS',
          },
          {
            name: 'Grillage des mattes de nickel',
            path: 'matte_20.pdf',
            n_table: '1.1.8 ter',
          },
          {
            name: 'Mines de fer',
            path: 'MINES FER.pdf',
            n_table: '1.1.17 bis',
          },
          {
            name: 'Poussières et vapeur arsenicales',
            path: '116BIS.pdf',
            n_table: '1.1.6 bis',
          },
        ],
      },
      {
        name: 'Cancer des voies urinaires',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
        ],
      },
      {
        name: 'Carcinome cutané basocellulaire',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
        ],
      },
      {
        name: 'Carcinome cutané spinocellulaire',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
        ],
      },
      {
        name: 'Epithélioma cutané primitif',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
          {
            name: 'Goudrons de houille, les huiles de houille, les brais de houille et les suies de combustion du charbon ',
            path: '1222BIS.pdf',
            n_table: '1.2.22 BIS',
          },
        ],
      },
      {
        name: 'Maladie de Bowen',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
        ],
      },
      {
        name: "Lésion primitive de l'épithélium urinaire",
        agents: [
          {
            name: 'Goudrons de houille, les huiles de houille, les brais de houille et les suies de combustion du charbon ',
            path: '1222BIS.pdf',
            n_table: '1.2.22 BIS',
          },
        ],
      },
      {
        name: "Cancer primitif de l'ethmoïde",
        agents: [
          {
            name: 'Grillage des mattes de nickel',
            path: 'matte_20.pdf',
            n_table: '1.1.8 ter',
          },
        ],
      },
      {
        name: 'Cancer des sinus de la face',
        agents: [
          {
            name: 'Grillage des mattes de nickel',
            path: 'matte_20.pdf',
            n_table: '1.1.8 ter',
          },
          {
            name: 'Poussières de bois ',
            path: '162.pdf',
            n_table: '1.6.2',
          },
        ],
      },
      {
        name: "Cancer de l'ethmoïde",
        agents: [
          {
            name: 'Poussières de bois ',
            path: '162.pdf',
            n_table: '1.6.2',
          },
        ],
      },
      {
        name: 'Leucémies',
        agents: [
          {
            name: 'Rayonnements ionisants ',
            path: '21.pdf',
            n_table: '2.1',
          },
        ],
      },
      {
        name: 'Sarcome osseux',
        agents: [
          {
            name: 'Rayonnements ionisants ',
            path: '21.pdf',
            n_table: '2.1',
          },
        ],
      },
      {
        name: 'Carcinome hépato-cellulaire',
        agents: [
          {
            name: 'Virus des Hépatites A,B,C,D et E ',
            path: '311.pdf',
            n_table: '3.11',
          },
        ],
      },
    ],
  },
  {
    pathology_name: 'Pathologies cutanéo-muqueuses',
    pathology_types: [
      {
        name: 'Lésions eczématiformes',
        agents: [
          {
            name: 'Acide chromique, chromates et bichromates alcalins, chromates de zinc et sulfate de chrome',
            path: 'chromates.pdf',
            n_table: '1.1.19',
          },
          {
            name: 'Aldéhyde formique et ses polymères ',
            path: '128.pdf',
            n_table: '1.2.8',
          },
          {
            name: 'Amines aromatiques, leurs sels et leurs dérivés notamment hydroxylés, halogénés, nitrés, nitrosés et sulfonés ',
            path: '1210.pdf',
            n_table: '1.2.10',
          },
          {
            name: 'Aminoglycosides, notamment la streptomycine, par la néomycine et ses sels ',
            path: '151.pdf',
            n_table: '1.5.1',
          },
          {
            name: 'Aminoglycosides, notamment la streptomycine, par la néomycine et ses sels ',
            path: '151.pdf',
            n_table: '1.5.1',
          },
          {
            name: 'Antimoine et ses dérivés',
            path: '1121.pdf',
            n_table: '1.1.21',
          },
          {
            name: 'Béryllium et ses composés',
            path: '115.pdf',
            n_table: '1.1.5',
          },
          {
            name: 'Bétalactamines (Pénicillines et leurs sels ) et les céphalosporines',
            path: '152.pdf',
            n_table: '1.5.2',
          },
          {
            name: 'Chlorpromazine (Largactyl)',
            path: '153.pdf',
            n_table: '1.5.3',
          },
          {
            name: 'Cobalt et ses composés',
            path: '114.pdf',
            n_table: '1.1.4',
          },
          {
            name: 'Enzymes ',
            path: '154.pdf',
            n_table: '1.5.4',
          },
          {
            name: "Furfural et l'alcool furfurylique ",
            path: '181.pdf',
            n_table: '1.2.19',
          },
          {
            name: 'Hydrocarbures liquides aliphatiques, alicycliques, hétérocycliques et aromatiques, et leurs mélanges (white spirit, essences spéciales) ; dérivés nitrés des hydrocarbures aliphatiques ; acétonitrile ; alcools, aldéhydes, cétone, esters, éthers dont le tétrahydrofurane, glycols et leurs éthers ; diméthylformamide, diméthylsulfoxyde ',
            path: '1220.pdf',
            n_table: '1.2.20',
          },
          {
            name: 'Isocyanates organiques ',
            path: '132.pdf',
            n_table: '1.3.2',
          },
          {
            name: 'Mercure et ses composés',
            path: 'MERCURE.pdf',
            n_table: '1.1.2',
          },
          {
            name: 'Mercure et ses composés',
            path: 'MERCURE.pdf',
            n_table: '1.1.2',
          },
          {
            name: 'Méthacrylate de méthyle ',
            path: '1217.pdf',
            n_table: '1.2.17',
          },
          {
            name: 'Phénylhyarazine ',
            path: '1221.pdf',
            n_table: '1.2.21',
          },
          {
            name: 'Poussières de bois ',
            path: '162.pdf',
            n_table: '1.6.2',
          },
          {
            name: 'Protéines du latex (ou caoutchouc naturel) ',
            path: '163.pdf',
            n_table: '1.6.3',
          },
          {
            name: 'Résines époxydiques et leurs constituants ',
            path: '131.pdf',
            n_table: '1.3.1',
          },
        ],
      },
      {
        name: 'Ulcérations cutanées',
        agents: [
          {
            name: 'Acide chromique, chromates et bichromates alcalins, chromates de zinc et sulfate de chrome',
            path: 'chromates.pdf',
            n_table: '1.1.19',
          },
          {
            name: 'Chlorure de sodium',
            path: 'cc.pdf',
            n_table: '1.1.18',
          },
          {
            name: 'Enzymes ',
            path: '154.pdf',
            n_table: '1.5.4',
          },
        ],
      },
      {
        name: 'Dermite irritative',
        agents: [
          {
            name: "Agents infectieux ou parasitaires contractées en milieu d'hospitalisation et d'hospitalisation à domicile (staphylocoques, pseudomonas aeroginosa, enterocoque, méningocoque, strepto béta-hémolytique, fièvre typhoϊde A et B, choléra, fièvre hémorragique, herpes, syphilis, gale, gonocoque)",
            path: '310.pdf',
            n_table: '3.10',
          },
          {
            name: 'Aldéhyde formique et ses polymères ',
            path: '128.pdf',
            n_table: '1.2.8',
          },
          {
            name: 'Amines aromatiques, leurs sels et leurs dérivés notamment hydroxylés, halogénés, nitrés, nitrosés et sulfonés ',
            path: '1210.pdf',
            n_table: '1.2.10',
          },
          {
            name: 'Amines aromatiques, leurs sels et leurs dérivés notamment hydroxylés, halogénés, nitrés, nitrosés et sulfonés ',
            path: '1210.pdf',
            n_table: '1.2.10',
          },
          {
            name: 'Amines aromatiques, leurs sels et leurs dérivés notamment hydroxylés, halogénés, nitrés, nitrosés et sulfonés ',
            path: '1210.pdf',
            n_table: '1.2.10',
          },
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
          {
            name: 'Bacilles tuberculeux et à certaines mycobactéries atypiques : Mycobacterium avium/intracellulaire, Mycobacterium kansasii, Mycobacterium xenopi, Mycobacterium marinum, Mycobacterium fortuitum ',
            path: '39.pdf',
            n_table: '3.9',
          },
          {
            name: 'Béryllium et ses composés',
            path: '115.pdf',
            n_table: '1.1.5',
          },
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
          {
            name: "Dérivés nitrées et chloronitrées des hydrocarbures benzéniques  huiles et graisses d'origine minérale ou de synthèse ",
            path: '124.pdf',
            n_table: '1.2.4',
          },
          {
            name: "Dérivés nitrés du phénol (dinitrophénols,dinitro-orthocrésol, dinoseb), par le pentachlorophénol, les pentachlorophénates et par les dérivés halogènes de l'hydroxybenzonitrile (bromoxynil, ioxynil) ",
            path: '126.pdf',
            n_table: '1.2.6',
          },
          {
            name: 'Hydrocarbures liquides aliphatiques, alicycliques, hétérocycliques et aromatiques, et leurs mélanges (white spirit, essences spéciales) ; dérivés nitrés des hydrocarbures aliphatiques ; acétonitrile ; alcools, aldéhydes, cétone, esters, éthers dont le tétrahydrofurane, glycols et leurs éthers ; diméthylformamide, diméthylsulfoxyde ',
            path: '1220.pdf',
            n_table: '1.2.20',
          },
          {
            name: 'Rickettsies ',
            path: '313.pdf',
            n_table: '3.13',
          },
          {
            name: 'Tétrachlorure de carbone ',
            path: '1214.pdf',
            n_table: '1.2.14',
          },
          {
            name: 'virus des Hépatites A,B,C,D et E ',
            path: '311.pdf',
            n_table: '3.11',
          },
        ],
      },
      {
        name: 'Erythème migrant de Lipschutz',
        agents: [
          {
            name: "Agents infectieux ou parasitaires contractées en milieu d'hospitalisation et d'hospitalisation à domicile (staphylocoques, pseudomonas aeroginosa, enterocoque, méningocoque, strepto béta-hémolytique, fièvre typhoϊde A et B, choléra, fièvre hémorragique, herpes, syphilis, gale, gonocoque)",
            path: '310.pdf',
            n_table: '3.10',
          },
          {
            name: 'Bacilles tuberculeux et à certaines mycobactéries atypiques : Mycobacterium avium/intracellulaire, Mycobacterium kansasii, Mycobacterium xenopi, Mycobacterium marinum, Mycobacterium fortuitum ',
            path: '39.pdf',
            n_table: '3.9',
          },
          {
            name: 'Rickettsies ',
            path: '313.pdf',
            n_table: '3.13',
          },
          {
            name: 'Spirochétoses ',
            path: '34.pdf',
            n_table: '3.4',
          },
        ],
      },
      {
        name: 'Dermites eczématiformes',
        agents: [
          {
            name: 'Amines aliphatiques, alicycliques ou les éthanolamines ',
            path: '1211.pdf',
            n_table: '1.2.11',
          },
          {
            name: 'Ciments ( Amino-silicates de calcium)',
            path: 'ciment.pdf',
            n_table: '1.1.11',
          },
          {
            name: 'Goudrons de houille, les huiles de houille (comprenant les fractions de distillations dites phénoliques, naphtaléniques, acénaphténiques, anthracéniques et chryséniques), les brais ',
            path: '1222.pdf',
            n_table: '1.2.22',
          },
          {
            name: 'oxydes et sels de nickel',
            path: 'oxydes sel nickel.pdf',
            n_table: '1.1.8',
          },
        ],
      },
      {
        name: 'Périonyxis et onyxis',
        agents: [
          {
            name: 'Animaux et leurs viscères',
            path: '317.pdf',
            n_table: '3.17',
          },
          {
            name: 'fruits sucrés et leurs résidus et leurs jus',
            path: '317.pdf',
            n_table: '3.17',
          },
          {
            name: 'Mines, bâtiments et chantiers',
            path: '317.pdf',
            n_table: '3.17',
          },
        ],
      },
      {
        name: 'Plaies arsenicales',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
        ],
      },
      {
        name: 'Œdème malin',
        agents: [
          {
            name: 'Charbon professionnel ',
            path: '33.pdf',
            n_table: '3.3',
          },
        ],
      },
      {
        name: 'Pustule maligne',
        agents: [
          {
            name: 'Charbon professionnel ',
            path: '33.pdf',
            n_table: '3.3',
          },
        ],
      },
      {
        name: 'Ulcérations',
        agents: [
          {
            name: 'Ciments ( Amino-silicates de calcium)',
            path: 'ciment.pdf',
            n_table: '1.1.11',
          },
        ],
      },
      {
        name: 'Pyodermites',
        agents: [
          {
            name: 'Ciments ( Amino-silicates de calcium)',
            path: 'ciment.pdf',
            n_table: '1.1.11',
          },
        ],
      },
      {
        name: 'Epithélioma primitif ',
        agents: [
          {
            name: "Dérivés du pétrole : Huiles minérales peu ou non raffinées, huilles minérales régénérées utilisées dans les opérations d'usinage et de traitement des métaux, extraits aromatiques, résidus de craquage, huiles moteur usagées, suies de combustion des produits pétroliers ",
            path: '125.pdf',
            n_table: '1.2.5 bis',
          },
        ],
      },
      {
        name: 'Acné',
        agents: [
          {
            name: 'Dé́rivés halogénés des hydrocarbures aromatiques (monochlorobenzène, monobromobenzène, hexachlorobenzène)',
            path: '123.pdf',
            n_table: '1.2.3',
          },
        ],
      },
      {
        name: 'Porphyrie cutanée ',
        agents: [
          {
            name: 'Dé́rivés halogénés des hydrocarbures aromatiques (monochlorobenzène, monobromobenzène, hexachlorobenzène)',
            path: '123.pdf',
            n_table: '1.2.3',
          },
          {
            name: "Virus de l'hépatite C",
            path: '311.pdf',
            n_table: '3.11',
          },
        ],
      },
      {
        name: 'Dermites',
        agents: [
          {
            name: 'Fluor, acide fluorhydrique et ses sels minéraux',
            path: 'fluor.pdf',
            n_table: '1.1.10',
          },
        ],
      },
      {
        name: 'Brulures chimiques',
        agents: [
          {
            name: 'Fluor, acide fluorhydrique et ses sels minéraux',
            path: 'fluor.pdf',
            n_table: '1.1.10',
          },
        ],
      },
      {
        name: 'Dermites PHOTOTOXIQUES',
        agents: [
          {
            name: 'Goudrons de houille, les huiles de houille (comprenant les fractions de distillations dites phénoliques, naphtaléniques, acénaphténiques, anthracéniques et chryséniques), les brais ',
            path: '1222.pdf',
            n_table: '1.2.22',
          },
        ],
      },
      {
        name: 'Urticaire',
        agents: [
          {
            name: 'Protéines du latex (ou caoutchouc naturel) ',
            path: '163.pdf',
            n_table: '1.6.3',
          },
          {
            name: "Virus de l'hépatite B",
            path: '311.pdf',
            n_table: '3.11',
          },
          {
            name: "Virus de l'hépatite C",
            path: '311.pdf',
            n_table: '3.11',
          },
        ],
      },
      {
        name: 'Radiodermite aigue',
        agents: [
          {
            name: 'Rayonnements ionisants ',
            path: '21.pdf',
            n_table: '2.1',
          },
        ],
      },
      {
        name: 'Radiodermite chronique',
        agents: [
          {
            name: 'Rayonnements ionisants ',
            path: '21.pdf',
            n_table: '2.1',
          },
        ],
      },
      {
        name: 'Radioepithélite des muqueuses',
        agents: [
          {
            name: 'Rayonnements ionisants ',
            path: '21.pdf',
            n_table: '2.1',
          },
        ],
      },
      {
        name: 'Radiolésions chroniques des muqueuses',
        agents: [
          {
            name: 'Rayonnements ionisants ',
            path: '21.pdf',
            n_table: '2.1',
          },
        ],
      },
      {
        name: 'Brulures et irritations cutanées',
        agents: [
          {
            name: 'Sélénium et ses dérivés minéraux',
            path: '120.pdf',
            n_table: '1.1.20',
          },
        ],
      },
      {
        name: 'Dermite chronique atrophiante',
        agents: [
          {
            name: 'Spirochétoses ',
            path: '34.pdf',
            n_table: '3.4',
          },
        ],
      },
      {
        name: 'Dermites chroniques ou récidivantes',
        agents: [
          {
            name: 'Tétrachloréthane',
            path: '1213.pdf',
            n_table: '1.2.13',
          },
        ],
      },
      {
        name: 'Acrodermite papuleuse',
        agents: [
          {
            name: "Virus de l'hépatite B",
            path: '311.pdf',
            n_table: '3.11',
          },
        ],
      },
      {
        name: 'Erythème noueux',
        agents: [
          {
            name: "Virus de l'hépatite B",
            path: '311.pdf',
            n_table: '3.11',
          },
        ],
      },
      {
        name: 'Syndrome de Raynaud',
        agents: [
          {
            name: "Virus de l'hépatite B",
            path: '311.pdf',
            n_table: '3.11',
          },
        ],
      },
      {
        name: 'Purpura',
        agents: [
          {
            name: "Virus de l'hépatite C",
            path: '311.pdf',
            n_table: '3.11',
          },
        ],
      },
      {
        name: 'Syndrome sec',
        agents: [
          {
            name: "Virus de l'hépatite C",
            path: '311.pdf',
            n_table: '3.11',
          },
        ],
      },
      {
        name: 'Lichen plan',
        agents: [
          {
            name: 'Virus des Hépatites A,B,C,D et E ',
            path: '311.pdf',
            n_table: '3.11',
          },
        ],
      },
      {
        name: 'Sclérodermie systémique',
        agents: [
          {
            name: "Silice cristalline, silicates cristallins, graphite ou houille",
            path: '1112.pdf',
            n_table: '1.1.12',
          },
        ],
      },
    ],
  },
  {
    pathology_name: 'Pathologies infectieuses et parasitaires',
    pathology_types: [
      {
        name: 'Insuffisance rénale aigue',
        agents: [
          {
            name: 'Agents infectieux du groupe hantavirus',
            path: '319.pdf',
            n_table: '3.19',
          },
        ],
      },
      {
        name: 'Syndrome hémorragique',
        agents: [
          {
            name: 'Agents infectieux du groupe hantavirus',
            path: '319.pdf',
            n_table: '3.19',
          },
        ],
      },
      {
        name: 'Syndrome pseudo-grippal',
        agents: [
          {
            name: 'Agents infectieux du groupe hantavirus',
            path: '319.pdf',
            n_table: '3.19',
          },
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
          {
            name: 'Rage professionnelle ',
            path: '314.pdf',
            n_table: '3.14',
          },
          {
            name: 'Spirochétoses ',
            path: '34.pdf',
            n_table: '3.4',
          },
        ],
      },
      {
        name: 'Atteinte articulaire',
        agents: [
          {
            name: "Agents infectieux ou parasitaires contractées en milieu d'hospitalisation et d'hospitalisation à domicile (staphylocoques, pseudomonas aeroginosa, enterocoque, méningocoque, strepto béta-hémolytique, fièvre typhoϊde A et B, choléra, fièvre hémorragique, herpes, syphilis, gale, gonocoque)",
            path: '310.pdf',
            n_table: '3.10',
          },
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
          {
            name: 'Virus des Hépatites A,B,C,D et E ',
            path: '311.pdf',
            n_table: '3.11',
          },
        ],
      },
      {
        name: 'Atteinte cutanéo-muqueuse ',
        agents: [
          {
            name: "Agents infectieux ou parasitaires contractées en milieu d'hospitalisation et d'hospitalisation à domicile (staphylocoques, pseudomonas aeroginosa, enterocoque, méningocoque, strepto béta-hémolytique, fièvre typhoϊde A et B, choléra, fièvre hémorragique, herpes, syphilis, gale, gonocoque)",
            path: '310.pdf',
            n_table: '3.10',
          },
          {
            name: 'Bacilles tuberculeux et à certaines mycobactéries atypiques : Mycobacterium avium/intracellulaire, Mycobacterium kansasii, Mycobacterium xenopi, Mycobacterium marinum, Mycobacterium fortuitum ',
            path: '39.pdf',
            n_table: '3.9',
          },
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
          {
            name: 'Mycoses cutanées ',
            path: '318.pdf',
            n_table: '3.18',
          },
          {
            name: 'Périonyxis et onyxis ',
            path: '317.pdf',
            n_table: '3.17',
          },
          {
            name: 'Rickettsies ',
            path: '313.pdf',
            n_table: '3.13',
          },
          {
            name: 'Virus des Hépatites A,B,C,D et E ',
            path: '311.pdf',
            n_table: '3.11',
          },
        ],
      },
      {
        name: 'Atteinte oculaire',
        agents: [
          {
            name: "Agents infectieux ou parasitaires contractées en milieu d'hospitalisation et d'hospitalisation à domicile (staphylocoques, pseudomonas aeroginosa, enterocoque, méningocoque, strepto béta-hémolytique, fièvre typhoϊde A et B, choléra, fièvre hémorragique, herpes, syphilis, gale, gonocoque)",
            path: '310.pdf',
            n_table: '3.10',
          },
        ],
      },
      {
        name: 'Atteinte viscérale',
        agents: [
          {
            name: "Agents infectieux ou parasitaires contractées en milieu d'hospitalisation et d'hospitalisation à domicile (staphylocoques, pseudomonas aeroginosa, enterocoque, méningocoque, strepto béta-hémolytique, fièvre typhoϊde A et B, choléra, fièvre hémorragique, herpes, syphilis, gale, gonocoque)",
            path: '310.pdf',
            n_table: '3.10',
          },
        ],
      },
      {
        name: 'Broncho-pneumonie',
        agents: [
          {
            name: "Agents infectieux ou parasitaires contractées en milieu d'hospitalisation et d'hospitalisation à domicile (staphylocoques, pseudomonas aeroginosa, enterocoque, méningocoque, strepto béta-hémolytique, fièvre typhoϊde A et B, choléra, fièvre hémorragique, herpes, syphilis, gale, gonocoque)",
            path: '310.pdf',
            n_table: '3.10',
          },
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
        ],
      },
      {
        name: 'Dysenterie',
        agents: [
          {
            name: "Agents infectieux ou parasitaires contractées en milieu d'hospitalisation et d'hospitalisation à domicile (staphylocoques, pseudomonas aeroginosa, enterocoque, méningocoque, strepto béta-hémolytique, fièvre typhoϊde A et B, choléra, fièvre hémorragique, herpes, syphilis, gale, gonocoque)",
            path: '310.pdf',
            n_table: '3.10',
          },
          {
            name: 'Amibes ',
            path: '312.pdf',
            n_table: '3.12',
          },
        ],
      },
      {
        name: 'Encéphalite',
        agents: [
          {
            name: "Agents infectieux ou parasitaires contractées en milieu d'hospitalisation et d'hospitalisation à domicile (staphylocoques, pseudomonas aeroginosa, enterocoque, méningocoque, strepto béta-hémolytique, fièvre typhoϊde A et B, choléra, fièvre hémorragique, herpes, syphilis, gale, gonocoque)",
            path: '310.pdf',
            n_table: '3.10',
          },
        ],
      },
      {
        name: 'Endocardite',
        agents: [
          {
            name: "Agents infectieux ou parasitaires contractées en milieu d'hospitalisation et d'hospitalisation à domicile (staphylocoques, pseudomonas aeroginosa, enterocoque, méningocoque, strepto béta-hémolytique, fièvre typhoϊde A et B, choléra, fièvre hémorragique, herpes, syphilis, gale, gonocoque)",
            path: '310.pdf',
            n_table: '3.10',
          },
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
          {
            name: 'Rickettsies ',
            path: '313.pdf',
            n_table: '3.13',
          },
        ],
      },
      {
        name: 'Erysipèle',
        agents: [
          {
            name: "Agents infectieux ou parasitaires contractées en milieu d'hospitalisation et d'hospitalisation à domicile (staphylocoques, pseudomonas aeroginosa, enterocoque, méningocoque, strepto béta-hémolytique, fièvre typhoϊde A et B, choléra, fièvre hémorragique, herpes, syphilis, gale, gonocoque)",
            path: '310.pdf',
            n_table: '3.10',
          },
        ],
      },
      {
        name: 'Glomérulonéphrite aigue',
        agents: [
          {
            name: "Agents infectieux ou parasitaires contractées en milieu d'hospitalisation et d'hospitalisation à domicile (staphylocoques, pseudomonas aeroginosa, enterocoque, méningocoque, strepto béta-hémolytique, fièvre typhoϊde A et B, choléra, fièvre hémorragique, herpes, syphilis, gale, gonocoque)",
            path: '310.pdf',
            n_table: '3.10',
          },
          {
            name: 'Virus des Hépatites A,B,C,D et E ',
            path: '311.pdf',
            n_table: '3.11',
          },
        ],
      },
      {
        name: 'Méningite purulente',
        agents: [
          {
            name: "Agents infectieux ou parasitaires contractées en milieu d'hospitalisation et d'hospitalisation à domicile (staphylocoques, pseudomonas aeroginosa, enterocoque, méningocoque, strepto béta-hémolytique, fièvre typhoϊde A et B, choléra, fièvre hémorragique, herpes, syphilis, gale, gonocoque)",
            path: '310.pdf',
            n_table: '3.10',
          },
        ],
      },
      {
        name: 'Otites',
        agents: [
          {
            name: "Agents infectieux ou parasitaires contractées en milieu d'hospitalisation et d'hospitalisation à domicile (staphylocoques, pseudomonas aeroginosa, enterocoque, méningocoque, strepto béta-hémolytique, fièvre typhoϊde A et B, choléra, fièvre hémorragique, herpes, syphilis, gale, gonocoque)",
            path: '310.pdf',
            n_table: '3.10',
          },
        ],
      },
      {
        name: 'Panaris',
        agents: [
          {
            name: "Agents infectieux ou parasitaires contractées en milieu d'hospitalisation et d'hospitalisation à domicile (staphylocoques, pseudomonas aeroginosa, enterocoque, méningocoque, strepto béta-hémolytique, fièvre typhoϊde A et B, choléra, fièvre hémorragique, herpes, syphilis, gale, gonocoque)",
            path: '310.pdf',
            n_table: '3.10',
          },
        ],
      },
      {
        name: 'Pneumonie',
        agents: [
          {
            name: "Agents infectieux ou parasitaires contractées en milieu d'hospitalisation et d'hospitalisation à domicile (staphylocoques, pseudomonas aeroginosa, enterocoque, méningocoque, strepto béta-hémolytique, fièvre typhoϊde A et B, choléra, fièvre hémorragique, herpes, syphilis, gale, gonocoque)",
            path: '310.pdf',
            n_table: '3.10',
          },
        ],
      },
      {
        name: 'Septicémie',
        agents: [
          {
            name: "Agents infectieux ou parasitaires contractées en milieu d'hospitalisation et d'hospitalisation à domicile (staphylocoques, pseudomonas aeroginosa, enterocoque, méningocoque, strepto béta-hémolytique, fièvre typhoϊde A et B, choléra, fièvre hémorragique, herpes, syphilis, gale, gonocoque)",
            path: '310.pdf',
            n_table: '3.10',
          },
          {
            name: "Agents infectieux ou parasitaires contractées en milieu d'hospitalisation et d'hospitalisation à domicile (staphylocoques, pseudomonas aeroginosa, enterocoque, méningocoque, strepto béta-hémolytique, fièvre typhoϊde A et B, choléra, fièvre hémorragique, herpes, syphilis, gale, gonocoque)",
            path: '310.pdf',
            n_table: '3.10',
          },
        ],
      },
      {
        name: 'Hépatite',
        agents: [
          {
            name: 'Amibes ',
            path: '312.pdf',
            n_table: '3.12',
          },
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
          {
            name: 'Rickettsies ',
            path: '313.pdf',
            n_table: '3.13',
          },
          {
            name: 'Virus des Hépatites A,B,C,D et E ',
            path: '311.pdf',
            n_table: '3.11',
          },
        ],
      },
      {
        name: 'Anémie',
        agents: [
          {
            name: 'Ankylostomatose professionnelle',
            path: '315.pdf',
            n_table: '3.15',
          },
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
          {
            name: 'Virus des Hépatites A,B,C,D et E ',
            path: '311.pdf',
            n_table: '3.11',
          },
        ],
      },
      {
        name: 'Atteinte ganglionnaire',
        agents: [
          {
            name: 'Bacilles tuberculeux et à certaines mycobactéries atypiques : Mycobacterium avium/intracellulaire, Mycobacterium kansasii, Mycobacterium xenopi, Mycobacterium marinum, Mycobacterium fortuitum ',
            path: '39.pdf',
            n_table: '3.9',
          },
        ],
      },
      {
        name: 'Atteinte ostéoarticulaire',
        agents: [
          {
            name: 'Bacilles tuberculeux et à certaines mycobactéries atypiques : Mycobacterium avium/intracellulaire, Mycobacterium kansasii, Mycobacterium xenopi, Mycobacterium marinum, Mycobacterium fortuitum ',
            path: '39.pdf',
            n_table: '3.9',
          },
        ],
      },
      {
        name: 'Atteinte psychologique',
        agents: [
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
          {
            name: 'Rage professionnelle ',
            path: '314.pdf',
            n_table: '3.14',
          },
        ],
      },
      {
        name: 'Fièvre',
        agents: [
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
        ],
      },
      {
        name: 'Hémorragie',
        agents: [
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
        ],
      },
      {
        name: 'Méningo-Encéphalite',
        agents: [
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
        ],
      },
      {
        name: 'Néphrite',
        agents: [
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
        ],
      },
      {
        name: 'Phlébite',
        agents: [
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
        ],
      },
      {
        name: 'Pleurésie séro-fibrineuse',
        agents: [
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
        ],
      },
      {
        name: 'Purpura',
        agents: [
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
        ],
      },
      {
        name: 'Pustule maligne',
        agents: [
          {
            name: 'Charbon professionnel ',
            path: '33.pdf',
            n_table: '3.3',
          },
        ],
      },
      {
        name: 'Conjonctivite',
        agents: [
          {
            name: 'Kératoconjonctivites virales ',
            path: '36.pdf',
            n_table: '3.6',
          },
        ],
      },
      {
        name: 'Kératite',
        agents: [
          {
            name: 'Kératoconjonctivites virales ',
            path: '36.pdf',
            n_table: '3.6',
          },
        ],
      },
      {
        name: 'Atteinte digestive',
        agents: [
          {
            name: 'Ornithose Psittacose ',
            path: '37.pdf',
            n_table: '3.7',
          },
          {
            name: 'Ornithose Psittacose ',
            path: '37.pdf',
            n_table: '3.7',
          },
          {
            name: 'Spirochétoses ',
            path: '34.pdf',
            n_table: '3.4',
          },
        ],
      },
      {
        name: 'Pneumopathie aigue',
        agents: [
          {
            name: 'Ornithose Psittacose ',
            path: '37.pdf',
            n_table: '3.7',
          },
        ],
      },
      {
        name: 'Formes typhoïdes',
        agents: [
          {
            name: 'Ornithose Psittacose ',
            path: '37.pdf',
            n_table: '3.7',
          },
        ],
      },
      {
        name: 'Etat stuporeux',
        agents: [
          {
            name: 'Ornithose Psittacose ',
            path: '37.pdf',
            n_table: '3.7',
          },
        ],
      },
      {
        name: 'Forme neuroméningée',
        agents: [
          {
            name: 'Ornithose Psittacose ',
            path: '37.pdf',
            n_table: '3.7',
          },
        ],
      },
      {
        name: 'Atteinte loco-régionale tardive',
        agents: [
          {
            name: 'Pasteurelloses ',
            path: '35.pdf',
            n_table: '3.5',
          },
        ],
      },
      {
        name: 'Manifestations cliniques aigues',
        agents: [
          {
            name: 'Pasteurelloses ',
            path: '35.pdf',
            n_table: '3.5',
          },
        ],
      },
      {
        name: 'Manifestations de la poliomyélite antérieure aigue',
        agents: [
          {
            name: 'Poliomyélites ',
            path: '38.pdf',
            n_table: '3.8',
          },
        ],
      },
      {
        name: 'Atteinte neurologique',
        agents: [
          {
            name: 'Rage professionnelle ',
            path: '314.pdf',
            n_table: '3.14',
          },
          {
            name: 'Rickettsies ',
            path: '313.pdf',
            n_table: '3.13',
          },
          {
            name: 'Tétanos professionnel ',
            path: '32.pdf',
            n_table: '3.2',
          },
        ],
      },
      {
        name: 'Hypertension',
        agents: [
          {
            name: 'Tétanos professionnel ',
            path: '32.pdf',
            n_table: '3.2',
          },
        ],
      },
    ],
  },
  {
    pathology_name: 'Pathologies rénales, vésicales et génitales',
    pathology_types: [
      {
        name: 'Insuffisance rénale',
        agents: [
          {
            name: 'Agents infectieux du groupe hantavirus',
            path: '319.pdf',
            n_table: '3.19',
          },
        ],
      },
      {
        name: 'Néphrite ',
        agents: [
          {
            name: 'Agents infectieux du groupe hantavirus ',
            path: '319.pdf',
            n_table: '3.19',
          },
          {
            name: 'Cadmium et ses composés',
            path: 'CADMIUM.pdf',
            n_table: '1.1.14',
          },
        ],
      },
      {
        name: 'Lésions primitives de l’épithélium vésical',
        agents: [
          {
            name: 'Amines aromatiques et leurs sels et la N-Nitroso-dibutylamine et ses sels ',
            path: '1210TER.pdf',
            n_table: '1.2.10 ter',
          },
        ],
      },
      {
        name: 'Insuffisance rénale aigue',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
        ],
      },
      {
        name: 'Epididymite',
        agents: [
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
        ],
      },
      {
        name: 'Formes génitales subaiguës',
        agents: [
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
        ],
      },
      {
        name: 'Orchite',
        agents: [
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
        ],
      },
      {
        name: 'Prostatite',
        agents: [
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
        ],
      },
      {
        name: 'Salpingite',
        agents: [
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
        ],
      },
      {
        name: 'Atteinte rénale',
        agents: [
          {
            name: "Dérivés nitrés du phénol (dinitrophénols,dinitro-orthocrésol, dinoseb), par le pentachlorophénol, les pentachlorophénates et par les dérivés halogènes de l'hydroxybenzonitrile (bromoxynil, ioxynil) ",
            path: '126.pdf',
            n_table: '1.2.6',
          },
        ],
      },
      {
        name: 'Epithélioma cutané primitif',
        agents: [
          {
            name: 'Goudrons de houille, les huiles de houille, les brais de houille et les suies de combustion du charbon ',
            path: '1222BIS.pdf',
            n_table: '1.2.22 BIS',
          },
        ],
      },
      {
        name: "Lésion primitive de l'épithélium urinaire",
        agents: [
          {
            name: 'Goudrons de houille, les huiles de houille, les brais de houille et les suies de combustion du charbon ',
            path: '1222BIS.pdf',
            n_table: '1.2.22 BIS',
          },
        ],
      },
      {
        name: 'Néphropathie tubulaire',
        agents: [
          {
            name: 'Hydrocarbures aliphatiques halogénés énumérés ci-après : dichlorométhane ; trichlorométhane ; tribromométhane ; triiodométhane ; tétrabromométhane ; chloroéthane ; 1,1-dichloroéthane ; 1,2-dichloroéthane ; 1,2-dibromoéthane ; 1,1,1- trichloroéthane ; 1,1,2-trichloroéthane ; 1,1,2,2-tétrabromoéthane ; pentachloroéthane ; 1-bromopropane ; 2-bromopropane ; 1,2- dichloropropane ; trichloroéthylène ; tétrachloroéthylène ; dichloro- acétylène ; trichlorofluorométhane ; 1,1,2,2-tétrachloro - 1,2-difluoroéthane ; 1,1,1,2-tétrachloro - 2,2-difluoroéthane ; 1,1,2-trichloro - 1,2,2- trifluoroéthane ; 1,1,1-trichloro - 2,2,2-trifluoroéthane ; 1,1-dichloro - 2,2,2- trifluoroéthane ; 1,2-dichloro - 1,1-difluoroéthane ; 1,1-dichloro - 1- fluoroéthane. ',
            path: '121.pdf',
            n_table: '1.2.1',
          },
        ],
      },
      {
        name: 'Néphrite azotémique',
        agents: [
          {
            name: 'Mercure et ses composés',
            path: 'MERCURE.pdf',
            n_table: '1.1.2',
          },
        ],
      },
      {
        name: 'Néphropathie glomérulaire',
        agents: [
          {
            name: 'Plomb et ses composés',
            path: 'plomb.pdf',
            n_table: '1.1.1',
          },
          {
            name: 'Virus des Hépatites A,B,C,D et E ',
            path: '311.pdf',
            n_table: '3.11',
          },
        ],
      },
      {
        name: 'Néphropathie tubulo-interstitielle',
        agents: [
          {
            name: 'Plomb et ses composés',
            path: 'plomb.pdf',
            n_table: '1.1.1',
          },
        ],
      },
      {
        name: 'Néphrite',
        agents: [
          {
            name: 'Tétrachloréthane',
            path: '1213.pdf',
            n_table: '1.2.13',
          },
          {
            name: 'Tétrachlorure de carbone ',
            path: '1214.pdf',
            n_table: '1.2.14',
          },
        ],
      },
    ],
  },
  {
    pathology_name: 'Pathologies hématologiques',
    pathology_types: [
      {
        name: 'Syndrome hémorragique',
        agents: [
          {
            name: 'Agents infectieux du groupe hantavirus',
            path: '319.pdf',
            n_table: '3.19',
          },
          {
            name: 'Rayonnements ionisants ',
            path: '21.pdf',
            n_table: '2.1',
          },
        ],
      },
      {
        name: 'Thrombopénie',
        agents: [
          {
            name: "Agents infectieux ou parasitaires contractées en milieu d'hospitalisation et d'hospitalisation à domicile (staphylocoques, pseudomonas aeroginosa, enterocoque, méningocoque, strepto béta-hémolytique, fièvre typhoϊde A et B, choléra, fièvre hémorragique, herpes, syphilis, gale, gonocoque)",
            path: '310.pdf',
            n_table: '3.10',
          },
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
          {
            name: 'Benzène ',
            path: '122.pdf',
            n_table: '1.2.2',
          },
          {
            name: 'Rayonnements ionisants ',
            path: '21.pdf',
            n_table: '2.1',
          },
        ],
      },
      {
        name: 'Hémolyse',
        agents: [
          {
            name: 'Amines aromatiques, leurs sels et leurs dérivés notamment hydroxylés, halogénés, nitrés, nitrosés et sulfonés ',
            path: '1210.pdf',
            n_table: '1.2.10',
          },
          {
            name: 'Hydrogène arsénié',
            path: 'hydrogène arsenié_19.pdf',
            n_table: '1.1.7',
          },
        ],
      },
      {
        name: 'Anémie',
        agents: [
          {
            name: 'Ankylostomatose professionnelle',
            path: '315.pdf',
            n_table: '3.15',
          },
          {
            name: 'Benzène ',
            path: '122.pdf',
            n_table: '1.2.2',
          },
          {
            name: 'Dérivés nitrés des glycols et du glycérol ',
            path: '127.pdf',
            n_table: '1.2.7',
          },
          {
            name: 'Fluor, acide fluorhydrique et ses sels minéraux',
            path: 'fluor.pdf',
            n_table: '1.1.10',
          },
          {
            name: 'Hydrocarbures aliphatiques halogénés énumérés ci-après : dichlorométhane ; trichlorométhane ; tribromométhane ; triiodométhane ; tétrabromométhane ; chloroéthane ; 1,1-dichloroéthane ; 1,2-dichloroéthane ; 1,2-dibromoéthane ; 1,1,1- trichloroéthane ; 1,1,2-trichloroéthane ; 1,1,2,2-tétrabromoéthane ; pentachloroéthane ; 1-bromopropane ; 2-bromopropane ; 1,2- dichloropropane ; trichloroéthylène ; tétrachloroéthylène ; dichloro- acétylène ; trichlorofluorométhane ; 1,1,2,2-tétrachloro - 1,2-difluoroéthane ; 1,1,1,2-tétrachloro - 2,2-difluoroéthane ; 1,1,2-trichloro - 1,2,2- trifluoroéthane ; 1,1,1-trichloro - 2,2,2-trifluoroéthane ; 1,1-dichloro - 2,2,2- trifluoroéthane ; 1,2-dichloro - 1,1-difluoroéthane ; 1,1-dichloro - 1- fluoroéthane. ',
            path: '121.pdf',
            n_table: '1.2.1',
          },
          {
            name: 'Phénylhyarazine ',
            path: '1221.pdf',
            n_table: '1.2.21',
          },
          {
            name: 'Plomb et ses composés',
            path: 'plomb.pdf',
            n_table: '1.1.1',
          },
          {
            name: 'Rayonnements ionisants ',
            path: '21.pdf',
            n_table: '2.1',
          },
          {
            name: 'Virus des Hépatites A,B,C,D et E ',
            path: '311.pdf',
            n_table: '3.11',
          },
        ],
      },
      {
        name: 'Leucopénie',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
          {
            name: 'Benzène ',
            path: '122.pdf',
            n_table: '1.2.2',
          },
          {
            name: 'Hydrocarbures aliphatiques halogénés énumérés ci-après : dichlorométhane ; trichlorométhane ; tribromométhane ; triiodométhane ; tétrabromométhane ; chloroéthane ; 1,1-dichloroéthane ; 1,2-dichloroéthane ; 1,2-dibromoéthane ; 1,1,1- trichloroéthane ; 1,1,2-trichloroéthane ; 1,1,2,2-tétrabromoéthane ; pentachloroéthane ; 1-bromopropane ; 2-bromopropane ; 1,2- dichloropropane ; trichloroéthylène ; tétrachloroéthylène ; dichloro- acétylène ; trichlorofluorométhane ; 1,1,2,2-tétrachloro - 1,2-difluoroéthane ; 1,1,1,2-tétrachloro - 2,2-difluoroéthane ; 1,1,2-trichloro - 1,2,2- trifluoroéthane ; 1,1,1-trichloro - 2,2,2-trifluoroéthane ; 1,1-dichloro - 2,2,2- trifluoroéthane ; 1,2-dichloro - 1,1-difluoroéthane ; 1,1-dichloro - 1- fluoroéthane. ',
            path: '121.pdf',
            n_table: '1.2.1',
          },
          {
            name: 'Rayonnements ionisants ',
            path: '21.pdf',
            n_table: '2.1',
          },
        ],
      },
      {
        name: 'Aplasie médullaire',
        agents: [
          {
            name: 'Benzène ',
            path: '122.pdf',
            n_table: '1.2.2',
          },
          {
            name: 'Hydrocarbures aliphatiques halogénés énumérés ci-après : dichlorométhane ; trichlorométhane ; tribromométhane ; triiodométhane ; tétrabromométhane ; chloroéthane ; 1,1-dichloroéthane ; 1,2-dichloroéthane ; 1,2-dibromoéthane ; 1,1,1- trichloroéthane ; 1,1,2-trichloroéthane ; 1,1,2,2-tétrabromoéthane ; pentachloroéthane ; 1-bromopropane ; 2-bromopropane ; 1,2- dichloropropane ; trichloroéthylène ; tétrachloroéthylène ; dichloro- acétylène ; trichlorofluorométhane ; 1,1,2,2-tétrachloro - 1,2-difluoroéthane ; 1,1,1,2-tétrachloro - 2,2-difluoroéthane ; 1,1,2-trichloro - 1,2,2- trifluoroéthane ; 1,1,1-trichloro - 2,2,2-trifluoroéthane ; 1,1-dichloro - 2,2,2- trifluoroéthane ; 1,2-dichloro - 1,1-difluoroéthane ; 1,1-dichloro - 1- fluoroéthane. ',
            path: '121.pdf',
            n_table: '1.2.1',
          },
        ],
      },
      {
        name: 'Hypoplasie médullaire',
        agents: [
          {
            name: 'Benzène ',
            path: '122.pdf',
            n_table: '1.2.2',
          },
          {
            name: 'Hydrocarbures aliphatiques halogénés énumérés ci-après : dichlorométhane ; trichlorométhane ; tribromométhane ; triiodométhane ; tétrabromométhane ; chloroéthane ; 1,1-dichloroéthane ; 1,2-dichloroéthane ; 1,2-dibromoéthane ; 1,1,1- trichloroéthane ; 1,1,2-trichloroéthane ; 1,1,2,2-tétrabromoéthane ; pentachloroéthane ; 1-bromopropane ; 2-bromopropane ; 1,2- dichloropropane ; trichloroéthylène ; tétrachloroéthylène ; dichloro- acétylène ; trichlorofluorométhane ; 1,1,2,2-tétrachloro - 1,2-difluoroéthane ; 1,1,1,2-tétrachloro - 2,2-difluoroéthane ; 1,1,2-trichloro - 1,2,2- trifluoroéthane ; 1,1,1-trichloro - 2,2,2-trifluoroéthane ; 1,1-dichloro - 2,2,2- trifluoroéthane ; 1,2-dichloro - 1,1-difluoroéthane ; 1,1-dichloro - 1- fluoroéthane. ',
            path: '121.pdf',
            n_table: '1.2.1',
          },
        ],
      },
      {
        name: 'Neutropénie',
        agents: [
          {
            name: 'Benzène ',
            path: '122.pdf',
            n_table: '1.2.2',
          },
          {
            name: "Dérivés nitrés du phénol (dinitrophénols,dinitro-orthocrésol, dinoseb), par le pentachlorophénol, les pentachlorophénates et par les dérivés halogènes de l'hydroxybenzonitrile (bromoxynil, ioxynil) ",
            path: '126.pdf',
            n_table: '1.2.6',
          },
          {
            name: 'Hydrocarbures aliphatiques halogénés énumérés ci-après : dichlorométhane ; trichlorométhane ; tribromométhane ; triiodométhane ; tétrabromométhane ; chloroéthane ; 1,1-dichloroéthane ; 1,2-dichloroéthane ; 1,2-dibromoéthane ; 1,1,1- trichloroéthane ; 1,1,2-trichloroéthane ; 1,1,2,2-tétrabromoéthane ; pentachloroéthane ; 1-bromopropane ; 2-bromopropane ; 1,2- dichloropropane ; trichloroéthylène ; tétrachloroéthylène ; dichloro- acétylène ; trichlorofluorométhane ; 1,1,2,2-tétrachloro - 1,2-difluoroéthane ; 1,1,1,2-tétrachloro - 2,2-difluoroéthane ; 1,1,2-trichloro - 1,2,2- trifluoroéthane ; 1,1,1-trichloro - 2,2,2-trifluoroéthane ; 1,1-dichloro - 2,2,2- trifluoroéthane ; 1,2-dichloro - 1,1-difluoroéthane ; 1,1-dichloro - 1- fluoroéthane. ',
            path: '121.pdf',
            n_table: '1.2.1',
          },
        ],
      },
      {
        name: 'Leucémies',
        agents: [
          {
            name: 'Rayonnements ionisants ',
            path: '21.pdf',
            n_table: '2.1',
          },
          {
            name: 'Rayonnements ionisants ',
            path: '21.pdf',
            n_table: '2.1',
          },
        ],
      },
    ],
  },
  {
    pathology_name: 'Pathologies cardio-vasculaires',
    pathology_types: [
      {
        name: 'Endocardite',
        agents: [
          {
            name: "Agents infectieux ou parasitaires contractées en milieu d'hospitalisation et d'hospitalisation à domicile (staphylocoques, pseudomonas aeroginosa, enterocoque, méningocoque, strepto béta-hémolytique, fièvre typhoϊde A et B, choléra, fièvre hémorragique, herpes, syphilis, gale, gonocoque)",
            path: '310.pdf',
            n_table: '3.10',
          },
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
        ],
      },
      {
        name: 'Arrêt circulatoire',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
        ],
      },
      {
        name: 'Insuffisance circulatoire',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
        ],
      },
      {
        name: 'Trouble de la conduction',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
        ],
      },
      {
        name: 'Trouble du rythme',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
        ],
      },
      {
        name: 'Cardiopathie ischémique',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
        ],
      },
      {
        name: 'Artérite des membres inferieurs',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
        ],
      },
      {
        name: 'Hypertension artérielle',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
        ],
      },
      {
        name: 'Phlébite',
        agents: [
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
        ],
      },
      {
        name: 'Angiopathies des doigts et orteils',
        agents: [
          {
            name: 'Chlorure de vinyle',
            path: '133.pdf',
            n_table: '1.3.3',
          },
        ],
      },
      {
        name: 'Hypertension portale',
        agents: [
          {
            name: 'Chlorure de vinyle',
            path: '133.pdf',
            n_table: '1.3.3',
          },
        ],
      },
      {
        name: 'Syndrome angioneurotique',
        agents: [
          {
            name: 'Chlorure de vinyle',
            path: '133.pdf',
            n_table: '1.3.3',
          },
        ],
      },
      {
        name: 'Angine de poitrine',
        agents: [
          {
            name: 'Dérivés nitrés des glycols et du glycérol ',
            path: '127.pdf',
            n_table: '1.2.7',
          },
        ],
      },
      {
        name: 'Ischémie myocardique aigue',
        agents: [
          {
            name: 'Dérivés nitrés des glycols et du glycérol ',
            path: '127.pdf',
            n_table: '1.2.7',
          },
        ],
      },
      {
        name: 'Infarctus du myocarde',
        agents: [
          {
            name: "Dérivés nitrés du phénol (dinitrophénols,dinitro-orthocrésol, dinoseb), par le pentachlorophénol, les pentachlorophénates et par les dérivés halogènes de l'hydroxybenzonitrile (bromoxynil, ioxynil) ",
            path: '126.pdf',
            n_table: '1.2.6',
          },
        ],
      },
      {
        name: 'Atteinte myocardique',
        agents: [
          {
            name: "Dérivés nitrés du phénol (dinitrophénols,dinitro-orthocrésol, dinoseb), par le pentachlorophénol, les pentachlorophénates et par les dérivés halogènes de l'hydroxybenzonitrile (bromoxynil, ioxynil) ",
            path: '126.pdf',
            n_table: '1.2.6',
          },
        ],
      },
      {
        name: 'Œdème pulmonaire',
        agents: [
          {
            name: "Dérivés nitrés du phénol (dinitrophénols,dinitro-orthocrésol, dinoseb), par le pentachlorophénol, les pentachlorophénates et par les dérivés halogènes de l'hydroxybenzonitrile (bromoxynil, ioxynil) ",
            path: '126.pdf',
            n_table: '1.2.6',
          },
        ],
      },
     
      {
        name: 'Bradycardie',
        agents: [
          {
            name: "Phosphates, les pyrophosphates et thiophosphates d'alcoyle, d'aryle ou d'alcoylaryle et autres organophosphorés anticholinéstérasiques ainsi que par les phosphoramides et car bamates hétérocycliques anticholinéstérasiques ",
            path: '142.pdf',
            n_table: '1.4.2',
          },
        ],
      },
      {
        name: 'Hypotension',
        agents: [
          {
            name: "Phosphates, les pyrophosphates et thiophosphates d'alcoyle, d'aryle ou d'alcoylaryle et autres organophosphorés anticholinéstérasiques ainsi que par les phosphoramides et car bamates hétérocycliques anticholinéstérasiques ",
            path: '142.pdf',
            n_table: '1.4.2',
          },
        ],
      },
      {
        name: 'Insuffisance ventriculaire droite',
        agents: [
          {
            name: "Poussières d'amiante",
            path: '1113.pdf',
            n_table: '1.1.13',
          },
          {
            name: 'Poussières de carbures métalliques frittés ou fondus contenant du cobalt. ',
            path: '114BIS.pdf',
            n_table: '1.1.4 bis',
          },
          {
            name: "Silice cristalline, silicates cristallins, graphite ou houille",
            path: '1112.pdf',
            n_table: '1.1.12',
          },
        ],
      },
      {
        name: 'Troubles angio-neurotiques',
        agents: [
          {
            name: 'Vibrations et chocs transmis par certaines machines-outils, outils et objets et par les chocs itératifs du talon de la main sur des éléments fixes gestes et postures de travail ',
            path: '26.pdf',
            n_table: '2.6',
          },
        ],
      },
      {
        name: 'Syndrome du marteau hypothénar',
        agents: [
          {
            name: 'Vibrations et chocs transmis par certaines machines-outils, outils et objets et par les chocs itératifs du talon de la main sur des éléments fixes gestes et postures de travail ',
            path: '26.pdf',
            n_table: '2.6',
          },
        ],
      },
      {
        name: 'Phénomène de Raynaud',
        agents: [
          {
            name: 'Vibrations et chocs transmis par certaines machines-outils, outils et objets et par les chocs itératifs du talon de la main sur des éléments fixes gestes et postures de travail ',
            path: '26.pdf',
            n_table: '2.6',
          },
        ],
      },
    ],
  },
  {
    pathology_name: 'Pathologies neuromusculaires et psychiatriques',
    pathology_types: [
      {
        name: 'Méningite ',
        agents: [
          {
            name: "Agents infectieux ou parasitaires contractées en milieu d'hospitalisation et d'hospitalisation à domicile (staphylocoques, pseudomonas aeroginosa, enterocoque, méningocoque, strepto béta-hémolytique, fièvre typhoϊde A et B, choléra, fièvre hémorragique, herpes, syphilis, gale, gonocoque)",
            path: '310.pdf',
            n_table: '3.10',
          },
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
          {
            name: 'Spirochétoses ',
            path: '34.pdf',
            n_table: '3.4',
          },
        ],
      },
      {
        name: 'Coma',
        agents: [
          {
            name: 'Amines aromatiques, leurs sels et leurs dérivés notamment hydroxylés, halogénés, nitrés, nitrosés et sulfonés ',
            path: '1210.pdf',
            n_table: '1.2.10',
          },
          {
            name: 'Bromure de méthyle',
            path: '1215.pdf',
            n_table: '1.2.15',
          },
          {
            name: 'Bromure de méthyle',
            path: '1215.pdf',
            n_table: '1.2.15',
          },
          {
            name: 'Chlorure de méthyle ',
            path: '1216.pdf',
            n_table: '1.2.16',
          },
          {
            name: 'Dérivés nitrés des hydrocarbures aliphatiques',
            path: '1220.pdf',
            n_table: '1.2.20',
          },
          {
            name: 'Hydrocarbures liquides aliphatiques, alicycliques, hétérocycliques et aromatiques, et leurs mélanges (white spirit, essences spéciales) ; dérivés nitrés des hydrocarbures aliphatiques ; acétonitrile ; alcools, aldéhydes, cétone, esters, éthers dont le tétrahydrofurane, glycols et leurs éthers ; diméthylformamide, diméthylsulfoxyde ',
            path: '1220.pdf',
            n_table: '1.2.20',
          },
          {
            name: 'Manganèse',
            path: '113.pdf',
            n_table: '1.1.3',
          },
        ],
      },
      {
        name: 'Narcose',
        agents: [
          {
            name: 'Amines aromatiques, leurs sels et leurs dérivés notamment hydroxylés, halogénés, nitrés, nitrosés et sulfonés ',
            path: '1210.pdf',
            n_table: '1.2.10',
          },
        ],
      },
      {
        name: 'Somnolence',
        agents: [
          {
            name: 'Amines aromatiques, leurs sels et leurs dérivés notamment hydroxylés, halogénés, nitrés, nitrosés et sulfonés ',
            path: '1210.pdf',
            n_table: '1.2.10',
          },
        ],
      },
      {
        name: 'Encéphalopathie',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
          {
            name: 'Hydrocarbures liquides aliphatiques, alicycliques, hétérocycliques et aromatiques, et leurs mélanges (white spirit, essences spéciales) ; dérivés nitrés des hydrocarbures aliphatiques ; acétonitrile ; alcools, aldéhydes, cétone, esters, éthers dont le tétrahydrofurane, glycols et leurs éthers ; diméthylformamide, diméthylsulfoxyde ',
            path: '1220.pdf',
            n_table: '1.2.20',
          },
          {
            name: 'Pesticides ',
            path: '141.pdf',
            n_table: '1.4.1',
          },
        ],
      },
      {
        name: 'Neuropathie périphérique',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
          {
            name: 'Hydrocarbures aliphatiques halogénés énumérés ci-après : dichlorométhane ; trichlorométhane ; tribromométhane ; triiodométhane ; tétrabromométhane ; chloroéthane ; 1,1-dichloroéthane ; 1,2-dichloroéthane ; 1,2-dibromoéthane ; 1,1,1- trichloroéthane ; 1,1,2-trichloroéthane ; 1,1,2,2-tétrabromoéthane ; pentachloroéthane ; 1-bromopropane ; 2-bromopropane ; 1,2- dichloropropane ; trichloroéthylène ; tétrachloroéthylène ; dichloro- acétylène ; trichlorofluorométhane ; 1,1,2,2-tétrachloro - 1,2-difluoroéthane ; 1,1,1,2-tétrachloro - 2,2-difluoroéthane ; 1,1,2-trichloro - 1,2,2- trifluoroéthane ; 1,1,1-trichloro - 2,2,2-trifluoroéthane ; 1,1-dichloro - 2,2,2- trifluoroéthane ; 1,2-dichloro - 1,1-difluoroéthane ; 1,1-dichloro - 1- fluoroéthane. ',
            path: '121.pdf',
            n_table: '1.2.1',
          },
          {
            name: 'Plomb et ses composés',
            path: 'plomb.pdf',
            n_table: '1.1.1',
          },
          {
            name: 'Spirochétoses ',
            path: '34.pdf',
            n_table: '3.4',
          },
          {
            name: 'Virus des Hépatites A,B,C,D et E ',
            path: '311.pdf',
            n_table: '3.11',
          },
        ],
      },
      {
        name: 'Anxiété',
        agents: [
          {
            name: 'Bromure de méthyle',
            path: '1215.pdf',
            n_table: '1.2.15',
          },
        ],
      },
      {
        name: 'Aphasies',
        agents: [
          {
            name: 'Bromure de méthyle',
            path: '1215.pdf',
            n_table: '1.2.15',
          },
        ],
      },
      {
        name: 'Ataxie',
        agents: [
          {
            name: 'Bromure de méthyle',
            path: '1215.pdf',
            n_table: '1.2.15',
          },
          {
            name: 'Chlorure de méthyle ',
            path: '1216.pdf',
            n_table: '1.2.16',
          },
        ],
      },
      {
        name: 'Crises épileptiformes',
        agents: [
          {
            name: 'Bromure de méthyle',
            path: '1215.pdf',
            n_table: '1.2.15',
          },
        ],
      },
      {
        name: 'Dépression',
        agents: [
          {
            name: 'Bromure de méthyle',
            path: '1215.pdf',
            n_table: '1.2.15',
          },
        ],
      },
      {
        name: 'Dysarthrie',
        agents: [
          {
            name: 'Bromure de méthyle',
            path: '1215.pdf',
            n_table: '1.2.15',
          },
        ],
      },
      {
        name: 'Encéphalite',
        agents: [
          {
            name: 'Bromure de méthyle',
            path: '1215.pdf',
            n_table: '1.2.15',
          },
          {
            name: 'Manganèse',
            path: '113.pdf',
            n_table: '1.1.3',
          },
        ],
      },
      {
        name: 'Myoclonies',
        agents: [
          {
            name: 'Bromure de méthyle',
            path: '1215.pdf',
            n_table: '1.2.15',
          },
        ],
      },
      {
        name: 'Tremblements',
        agents: [
          {
            name: 'Bromure de méthyle',
            path: '1215.pdf',
            n_table: '1.2.15',
          },
        ],
      },
      {
        name: 'Arachnoïdite',
        agents: [
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
        ],
      },
      {
        name: 'Atteinte psychopathologique',
        agents: [
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
        ],
      },
      {
        name: 'MENINGO-Encéphalite',
        agents: [
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
        ],
      },
      {
        name: 'Amnésie',
        agents: [
          {
            name: 'Chlorure de méthyle ',
            path: '1216.pdf',
            n_table: '1.2.16',
          },
        ],
      },
      {
        name: 'Délire',
        agents: [
          {
            name: 'Chlorure de méthyle ',
            path: '1216.pdf',
            n_table: '1.2.16',
          },
        ],
      },
      {
        name: 'Vertiges',
        agents: [
          {
            name: 'Chlorure de méthyle ',
            path: '1216.pdf',
            n_table: '1.2.16',
          },
          {
            name: 'Oxyde de carbone ',
            path: '17.pdf',
            n_table: '1.7',
          },
          {
            name: 'Oxyde de carbone ',
            path: '17.pdf',
            n_table: '1.7',
          },
          {
            name: "Phosphates, les pyrophosphates et thiophosphates d'alcoyle, d'aryle ou d'alcoylaryle et autres organophosphorés anticholinéstérasiques ainsi que par les phosphoramides et car bamates hétérocycliques anticholinéstérasiques ",
            path: '142.pdf',
            n_table: '1.4.2',
          },
          {
            name: "Phosphates, les pyrophosphates et thiophosphates d'alcoyle, d'aryle ou d'alcoylaryle et autres organophosphorés anticholinéstérasiques ainsi que par les phosphoramides et car bamates hétérocycliques anticholinéstérasiques ",
            path: '142.pdf',
            n_table: '1.4.2',
          },
        ],
      },
      {
        name: 'Atteinte angio-neurotique des doigts et orteils',
        agents: [
          {
            name: 'Chlorure de vinyle',
            path: '133.pdf',
            n_table: '1.3.3',
          },
        ],
      },
      {
        name: 'Accidents nerveux aigus',
        agents: [
          {
            name: 'Dérivés halogénés des hydrocarbures aromatiques (monochlorobenzène, monobromobenézne, hexachlorobenzène)',
            path: '123.pdf',
            n_table: '1.2.3',
          },
          {
            name: 'Tétrachloréthane',
            path: '1213.pdf',
            n_table: '1.2.13',
          },
          {
            name: 'Tétrachlorure de carbone ',
            path: '1214.pdf',
            n_table: '1.2.14',
          },
        ],
      },
      {
        name: 'POLYNévrite',
        agents: [
          {
            name: 'Hexane ',
            path: '1212.pdf',
            n_table: '1.2.12',
          },
          {
            name: 'Tétrachloréthane',
            path: '1213.pdf',
            n_table: '1.2.13',
          },
          {
            name: 'Tricresylphosphate ',
            path: '129.pdf',
            n_table: '1.2.9',
          },
        ],
      },
      {
        name: 'Neuropathie optique',
        agents: [
          {
            name: 'Hydrocarbures aliphatiques halogénés énumérés ci-après : dichlorométhane ; trichlorométhane ; tribromométhane ; triiodométhane ; tétrabromométhane ; chloroéthane ; 1,1-dichloroéthane ; 1,2-dichloroéthane ; 1,2-dibromoéthane ; 1,1,1- trichloroéthane ; 1,1,2-trichloroéthane ; 1,1,2,2-tétrabromoéthane ; pentachloroéthane ; 1-bromopropane ; 2-bromopropane ; 1,2- dichloropropane ; trichloroéthylène ; tétrachloroéthylène ; dichloro- acétylène ; trichlorofluorométhane ; 1,1,2,2-tétrachloro - 1,2-difluoroéthane ; 1,1,1,2-tétrachloro - 2,2-difluoroéthane ; 1,1,2-trichloro - 1,2,2- trifluoroéthane ; 1,1,1-trichloro - 2,2,2-trifluoroéthane ; 1,1-dichloro - 2,2,2- trifluoroéthane ; 1,2-dichloro - 1,1-difluoroéthane ; 1,1-dichloro - 1- fluoroéthane. ',
            path: '121.pdf',
            n_table: '1.2.1',
          },
        ],
      },
      {
        name: 'Neuropathie trigéminale',
        agents: [
          {
            name: 'Hydrocarbures aliphatiques halogénés énumérés ci-après : dichlorométhane ; trichlorométhane ; tribromométhane ; triiodométhane ; tétrabromométhane ; chloroéthane ; 1,1-dichloroéthane ; 1,2-dichloroéthane ; 1,2-dibromoéthane ; 1,1,1- trichloroéthane ; 1,1,2-trichloroéthane ; 1,1,2,2-tétrabromoéthane ; pentachloroéthane ; 1-bromopropane ; 2-bromopropane ; 1,2- dichloropropane ; trichloroéthylène ; tétrachloroéthylène ; dichloro- acétylène ; trichlorofluorométhane ; 1,1,2,2-tétrachloro - 1,2-difluoroéthane ; 1,1,1,2-tétrachloro - 2,2-difluoroéthane ; 1,1,2-trichloro - 1,2,2- trifluoroéthane ; 1,1,1-trichloro - 2,2,2-trifluoroéthane ; 1,1-dichloro - 2,2,2- trifluoroéthane ; 1,2-dichloro - 1,1-difluoroéthane ; 1,1-dichloro - 1- fluoroéthane. ',
            path: '121.pdf',
            n_table: '1.2.1',
          },
        ],
      },
      {
        name: 'Syndrome ébrieux',
        agents: [
          {
            name: 'Hydrocarbures liquides aliphatiques, alicycliques, hétérocycliques et aromatiques, et leurs mélanges (white spirit, essences spéciales) ; dérivés nitrés des hydrocarbures aliphatiques ; acétonitrile ; alcools, aldéhydes, cétone, esters, éthers dont le tétrahydrofurane, glycols et leurs éthers ; diméthylformamide, diméthylsulfoxyde ',
            path: '1220.pdf',
            n_table: '1.2.20',
          },
          {
            name: 'Hydrocarbures liquides aliphatiques, alicycliques, hétérocycliques et aromatiques, et leurs mélanges (white spirit, essences spéciales) ; dérivés nitrés des hydrocarbures aliphatiques ; acétonitrile ; alcools, aldéhydes, cétone, esters, éthers dont le tétrahydrofurane, glycols et leurs éthers ; diméthylformamide, diméthylsulfoxyde ',
            path: '1220.pdf',
            n_table: '1.2.20',
          },
        ],
      },
      {
        name: 'Syndrome narcotique',
        agents: [
          {
            name: 'Hydrocarbures liquides aliphatiques, alicycliques, hétérocycliques et aromatiques, et leurs mélanges (white spirit, essences spéciales) ; dérivés nitrés des hydrocarbures aliphatiques ; acétonitrile ; alcools, aldéhydes, cétone, esters, éthers dont le tétrahydrofurane, glycols et leurs éthers ; diméthylformamide, diméthylsulfoxyde ',
            path: '1220.pdf',
            n_table: '1.2.20',
          },
        ],
      },
      {
        name: 'Troubles nerveux : manganisme',
        agents: [
          {
            name: 'Manganèse',
            path: '113.pdf',
            n_table: '1.1.3',
          },
        ],
      },
      {
        name: 'Ataxie Cérébelleuse',
        agents: [
          {
            name: 'Mercure et ses composés',
            path: 'MERCURE.pdf',
            n_table: '1.1.2',
          },
        ],
      },
      {
        name: 'Encéphalopathie aigue',
        agents: [
          {
            name: 'Mercure et ses composés',
            path: 'MERCURE.pdf',
            n_table: '1.1.2',
          },
          {
            name: 'Plomb et ses composés',
            path: 'plomb.pdf',
            n_table: '1.1.1',
          },
        ],
      },
      {
        name: 'Tremblement intentionnel',
        agents: [
          {
            name: 'Mercure et ses composés',
            path: 'MERCURE.pdf',
            n_table: '1.1.2',
          },
        ],
      },
      {
        name: 'Atteinte neuro-méningée',
        agents: [
          {
            name: 'Ornithose Psittacose ',
            path: '37.pdf',
            n_table: '3.7',
          },
        ],
      },
      {
        name: 'Céphalées',
        agents: [
          {
            name: 'Oxyde de carbone ',
            path: '17.pdf',
            n_table: '1.7',
          },
          {
            name: "Phosphates, les pyrophosphates et thiophosphates d'alcoyle, d'aryle ou d'alcoylaryle et autres organophosphorés anticholinéstérasiques ainsi que par les phosphoramides et car bamates hétérocycliques anticholinéstérasiques ",
            path: '142.pdf',
            n_table: '1.4.2',
          },
        ],
      },
      {
        name: 'Asthénie',
        agents: [
          {
            name: 'Oxyde de carbone ',
            path: '17.pdf',
            n_table: '1.7',
          },
        ],
      },
      {
        name: 'Maladie de parkinson',
        agents: [
          {
            name: 'Pesticides ',
            path: '141.pdf',
            n_table: '1.4.1',
          },
        ],
      },
      {
        name: 'Confusion',
        agents: [
          {
            name: "Phosphates, les pyrophosphates et thiophosphates d'alcoyle, d'aryle ou d'alcoylaryle et autres organophosphorés anticholinéstérasiques ainsi que par les phosphoramides et car bamates hétérocycliques anticholinéstérasiques ",
            path: '142.pdf',
            n_table: '1.4.2',
          },
        ],
      },
      {
        name: 'Myosis',
        agents: [
          {
            name: "Phosphates, les pyrophosphates et thiophosphates d'alcoyle, d'aryle ou d'alcoylaryle et autres organophosphorés anticholinéstérasiques ainsi que par les phosphoramides et car bamates hétérocycliques anticholinéstérasiques ",
            path: '142.pdf',
            n_table: '1.4.2',
          },
        ],
      },
      {
        name: 'Encéphalopathie chronique',
        agents: [
          {
            name: 'Plomb et ses composés',
            path: 'plomb.pdf',
            n_table: '1.1.1',
          },
        ],
      },
      {
        name: 'Syndrome vertigineux',
        agents: [
          {
            name: 'Pression est supérieure à la pression atmosphérique ',
            path: '211.pdf',
            n_table: '2.11',
          },
        ],
      },
      {
        name: 'Atteinte des nerfs crâniens',
        agents: [
          {
            name: 'Spirochétoses ',
            path: '34.pdf',
            n_table: '3.4',
          },
        ],
      },
      {
        name: 'Syndrome neuro-digestif',
        agents: [
          {
            name: 'Sulfocarbonisme ',
            path: '1223.pdf',
            n_table: '1.2.23',
          },
        ],
      },
      {
        name: 'Troubles psychiques aigus',
        agents: [
          {
            name: 'Sulfocarbonisme ',
            path: '1223.pdf',
            n_table: '1.2.23',
          },
          {
            name: 'Tétanos professionnel ',
            path: '32.pdf',
            n_table: '3.2',
          },
        ],
      },
      {
        name: 'Troubles psychiques chroniques',
        agents: [
          {
            name: 'Sulfocarbonisme ',
            path: '1223.pdf',
            n_table: '1.2.23',
          },
        ],
      },
      {
        name: 'Délire ONIRIQUE',
        agents: [
          {
            name: 'Sulfocarbonisme ',
            path: '1223.pdf',
            n_table: '1.2.23',
          },
        ],
      },
      {
        name: 'Syndrome dépressif',
        agents: [
          {
            name: 'Sulfocarbonisme ',
            path: '1223.pdf',
            n_table: '1.2.23',
          },
        ],
      },
      {
        name: 'Confusion mentale',
        agents: [
          {
            name: 'Sulfocarbonisme ',
            path: '1223.pdf',
            n_table: '1.2.23',
          },
        ],
      },
      {
        name: 'Polynévrites',
        agents: [
          {
            name: 'Sulfocarbonisme ',
            path: '1223.pdf',
            n_table: '1.2.23',
          },
        ],
      },
      {
        name: 'Névrites',
        agents: [
          {
            name: 'Sulfocarbonisme ',
            path: '1223.pdf',
            n_table: '1.2.23',
          },{
            name: 'Tétrachloréthane',
            path: '1213.pdf',
            n_table: '1.2.13',
          },
        ],
      },
      {
        name: 'Névrite optique',
        agents: [
          {
            name: 'Sulfocarbonisme ',
            path: '1223.pdf',
            n_table: '1.2.23',
          },
        ],
      },
      {
        name: 'Nystagmus',
        agents: [
          {
            name: 'Travaux éxecutés dans les mines',
            path: '24.pdf',
            n_table: '2.4',
          },
        ],
      },
      {
        name: 'Atteinte brachiale',
        agents: [
          {
            name: 'Tularémie ',
            path: '316.pdf',
            n_table: '3.16',
          },
        ],
      },
      {
        name: 'Atteinte oculaire',
        agents: [
          {
            name: 'Tularémie ',
            path: '316.pdf',
            n_table: '3.16',
          },
        ],
      },
      {
        name: 'Atteinte pharyngée',
        agents: [
          {
            name: 'Tularémie ',
            path: '316.pdf',
            n_table: '3.16',
          },
        ],
      },
      {
        name: 'Atteinte pulmonaire',
        agents: [
          {
            name: 'Tularémie ',
            path: '316.pdf',
            n_table: '3.16',
          },
        ],
      },
      {
        name: 'Atteinte de la glande thyroïde',
        agents: [
          {
            name: 'Tularémie ',
            path: '316.pdf',
            n_table: '3.16',
          },
        ],
      },
      {
        name: 'Trouble angioneurotique',
        agents: [
          {
            name: 'Vibrations et chocs transmis par certaines machines-outils, outils et objets et par les chocs itératifs du talon de la main sur des éléments fixes gestes et postures de travail ',
            path: '26.pdf',
            n_table: '2.6',
          },
        ],
      },
    ],
  },
  {
    pathology_name: 'Intoxications aiguës',
    pathology_types: [
      {
        name: 'Atteinte cutanéomuqueuse',
        agents: [
          {
            name: 'Antimoine et ses dérivés',
            path: '1121.pdf',
            n_table: '1.1.21',
          },
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
          {
            name: "Dérivés nitrés du phénol (dinitrophénols,dinitro-orthocrésol, dinoseb), par le pentachlorophénol, les pentachlorophénates et par les dérivés halogènes de l'hydroxybenzonitrile (bromoxynil, ioxynil) ",
            path: '126.pdf',
            n_table: '1.2.6',
          },
          {
            name: 'Hydrocarbures aliphatiques halogénés énumérés ci-après : dichlorométhane ; trichlorométhane ; tribromométhane ; triiodométhane ; tétrabromométhane ; chloroéthane ; 1,1-dichloroéthane ; 1,2-dichloroéthane ; 1,2-dibromoéthane ; 1,1,1- trichloroéthane ; 1,1,2-trichloroéthane ; 1,1,2,2-tétrabromoéthane ; pentachloroéthane ; 1-bromopropane ; 2-bromopropane ; 1,2- dichloropropane ; trichloroéthylène ; tétrachloroéthylène ; dichloro- acétylène ; trichlorofluorométhane ; 1,1,2,2-tétrachloro - 1,2-difluoroéthane ; 1,1,1,2-tétrachloro - 2,2-difluoroéthane ; 1,1,2-trichloro - 1,2,2- trifluoroéthane ; 1,1,1-trichloro - 2,2,2-trifluoroéthane ; 1,1-dichloro - 2,2,2- trifluoroéthane ; 1,2-dichloro - 1,1-difluoroéthane ; 1,1-dichloro - 1- fluoroéthane. ',
            path: '121.pdf',
            n_table: '1.2.1',
          },
          {
            name: 'Tétrachloréthane',
            path: '1213.pdf',
            n_table: '1.2.13',
          },
        ],
      },
      {
        name: 'Stibiose',
        agents: [
          {
            name: 'Antimoine et ses dérivés',
            path: '1121.pdf',
            n_table: '1.1.21',
          },
        ],
      },
      {
        name: 'Arrêt circulatoire',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
        ],
      },
      {
        name: 'Atteinte broncho-pulmonaire',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
        ],
      },
      {
        name: 'Atteinte digestive',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
        ],
      },
      {
        name: 'Atteinte hématologique',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
        ],
      },
      {
        name: 'Atteinte neurologique',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
          {
            name: 'Bromure de méthyle',
            path: '1215.pdf',
            n_table: '1.2.15',
          },
          {
            name: 'Chlorure de méthyle ',
            path: '1216.pdf',
            n_table: '1.2.16',
          },
          {
            name: "Dérivés nitrés du phénol (dinitrophénols,dinitro-orthocrésol, dinoseb), par le pentachlorophénol, les pentachlorophénates et par les dérivés halogènes de l'hydroxybenzonitrile (bromoxynil, ioxynil) ",
            path: '126.pdf',
            n_table: '1.2.6',
          },
          {
            name: 'Hydrocarbures aliphatiques halogénés énumérés ci-après : dichlorométhane ; trichlorométhane ; tribromométhane ; triiodométhane ; tétrabromométhane ; chloroéthane ; 1,1-dichloroéthane ; 1,2-dichloroéthane ; 1,2-dibromoéthane ; 1,1,1- trichloroéthane ; 1,1,2-trichloroéthane ; 1,1,2,2-tétrabromoéthane ; pentachloroéthane ; 1-bromopropane ; 2-bromopropane ; 1,2- dichloropropane ; trichloroéthylène ; tétrachloroéthylène ; dichloro- acétylène ; trichlorofluorométhane ; 1,1,2,2-tétrachloro - 1,2-difluoroéthane ; 1,1,1,2-tétrachloro - 2,2-difluoroéthane ; 1,1,2-trichloro - 1,2,2- trifluoroéthane ; 1,1,1-trichloro - 2,2,2-trifluoroéthane ; 1,1-dichloro - 2,2,2- trifluoroéthane ; 1,2-dichloro - 1,1-difluoroéthane ; 1,1-dichloro - 1- fluoroéthane. ',
            path: '121.pdf',
            n_table: '1.2.1',
          },
          {
            name: 'Tétrachloréthane',
            path: '1213.pdf',
            n_table: '1.2.13',
          },
        ],
      },
      {
        name: 'Hépatite',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
          {
            name: 'Tétrachloréthane',
            path: '1213.pdf',
            n_table: '1.2.13',
          },
        ],
      },
      {
        name: 'Insuffisance circulatoire',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
        ],
      },
      {
        name: 'Insuffisance rénale aigue',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
        ],
      },
      {
        name: 'Syndrome dysentérique',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
        ],
      },
      {
        name: 'Troubles de la conduction',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
        ],
      },
      {
        name: 'Troubles du rythme',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
        ],
      },
      {
        name: 'Atteinte auditive',
        agents: [
          {
            name: 'Bromure de méthyle',
            path: '1215.pdf',
            n_table: '1.2.15',
          },
        ],
      },
      {
        name: 'Atteinte oculaire',
        agents: [
          {
            name: 'Bromure de méthyle',
            path: '1215.pdf',
            n_table: '1.2.15',
          },
        ],
      },
      {
        name: 'Atteinte psychologique',
        agents: [
          {
            name: 'Chlorure de méthyle ',
            path: '1216.pdf',
            n_table: '1.2.16',
          },
          {
            name: "Dérivés nitrés du phénol (dinitrophénols,dinitro-orthocrésol, dinoseb), par le pentachlorophénol, les pentachlorophénates et par les dérivés halogènes de l'hydroxybenzonitrile (bromoxynil, ioxynil) ",
            path: '126.pdf',
            n_table: '1.2.6',
          },
          {
            name: 'Hydrocarbures aliphatiques halogénés énumérés ci-après : dichlorométhane ; trichlorométhane ; tribromométhane ; triiodométhane ; tétrabromométhane ; chloroéthane ; 1,1-dichloroéthane ; 1,2-dichloroéthane ; 1,2-dibromoéthane ; 1,1,1- trichloroéthane ; 1,1,2-trichloroéthane ; 1,1,2,2-tétrabromoéthane ; pentachloroéthane ; 1-bromopropane ; 2-bromopropane ; 1,2- dichloropropane ; trichloroéthylène ; tétrachloroéthylène ; dichloro- acétylène ; trichlorofluorométhane ; 1,1,2,2-tétrachloro - 1,2-difluoroéthane ; 1,1,1,2-tétrachloro - 2,2-difluoroéthane ; 1,1,2-trichloro - 1,2,2- trifluoroéthane ; 1,1,1-trichloro - 2,2,2-trifluoroéthane ; 1,1-dichloro - 2,2,2- trifluoroéthane ; 1,2-dichloro - 1,1-difluoroéthane ; 1,1-dichloro - 1- fluoroéthane. ',
            path: '121.pdf',
            n_table: '1.2.1',
          },
        ],
      },
      {
        name: 'Glomérulo-néphropathie',
        agents: [
          {
            name: 'Tétrachloréthane',
            path: '1213.pdf',
            n_table: '1.2.13',
          },
        ],
      },
    ],
  },
  {
    pathology_name: 'Pathologies hépatho-gastro-intestinales',
    pathology_types: [
      {
        name: 'Douleurs abdominales',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
          {
            name: "Dérivés nitrés du phénol (dinitrophénols,dinitro-orthocrésol, dinoseb), par le pentachlorophénol, les pentachlorophénates et par les dérivés halogènes de l'hydroxybenzonitrile (bromoxynil, ioxynil) ",
            path: '126.pdf',
            n_table: '1.2.6',
          },
          {
            name: 'Mercure et ses composés',
            path: 'MERCURE.pdf',
            n_table: '1.1.2',
          },
          {
            name: "Phosphates, les pyrophosphates et thiophosphates d'alcoyle, d'aryle ou d'alcoylaryle et autres organophosphorés anticholinéstérasiques ainsi que par les phosphoramides et car bamates hétérocycliques anticholinéstérasiques ",
            path: '142.pdf',
            n_table: '1.4.2',
          },
          {
            name: 'Sulfocarbonisme ',
            path: '1223.pdf',
            n_table: '1.2.23',
          },
        ],
      },
      {
        name: 'Nausées',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
          {
            name: 'Cadmium et ses composés',
            path: 'CADMIUM.pdf',
            n_table: '1.1.14',
          },
          {
            name: 'Oxyde de carbone ',
            path: '17.pdf',
            n_table: '1.7',
          },
          {
            name: "Phosphates, les pyrophosphates et thiophosphates d'alcoyle, d'aryle ou d'alcoylaryle et autres organophosphorés anticholinéstérasiques ainsi que par les phosphoramides et car bamates hétérocycliques anticholinéstérasiques ",
            path: '142.pdf',
            n_table: '1.4.2',
          },
        ],
      },
      {
        name: 'Syndrome dysentérique',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
        ],
      },
      {
        name: 'Vomissements',
        agents: [
          {
            name: 'Arsenic et ses composés minéraux',
            path: '116.pdf',
            n_table: '1.1.6',
          },
          {
            name: 'Benzène , toluène, xylènes et tous les produits les renfermant',
            path: '122BIS.pdf',
            n_table: '1.2.2 BIS',
          },
          {
            name: 'Cadmium et ses composés',
            path: 'CADMIUM.pdf',
            n_table: '1.1.14',
          },
          {
            name: "Dérivés nitrés du phénol (dinitrophénols,dinitro-orthocrésol, dinoseb), par le pentachlorophénol, les pentachlorophénates et par les dérivés halogènes de l'hydroxybenzonitrile (bromoxynil, ioxynil) ",
            path: '126.pdf',
            n_table: '1.2.6',
          },
          {
            name: "Phosphates, les pyrophosphates et thiophosphates d'alcoyle, d'aryle ou d'alcoylaryle et autres organophosphorés anticholinéstérasiques ainsi que par les phosphoramides et car bamates hétérocycliques anticholinéstérasiques ",
            path: '142.pdf',
            n_table: '1.4.2',
          },
          {
            name: 'Sulfocarbonisme ',
            path: '1223.pdf',
            n_table: '1.2.23',
          },
          {
            name: 'Toluène',
            path: '122BIS.pdf',
            n_table: '1.2.2 BIS',
          },
          {
            name: 'Xylène',
            path: '122BIS.pdf',
            n_table: '1.2.2 BIS',
          },
        ],
      },
      {
        name: 'Troubles digestifs immédiats',
        agents: [
          {
            name: 'Benzène , toluène, xylènes et tous les produits les renfermant',
            path: '122BIS.pdf',
            n_table: '1.2.2 BIS',
          },
          {
            name: 'Toluène',
            path: '122BIS.pdf',
            n_table: '1.2.2 BIS',
          },
          {
            name: 'Tricresylphosphate ',
            path: '129.pdf',
            n_table: '1.2.9',
          },
          {
            name: 'Xylène',
            path: '122BIS.pdf',
            n_table: '1.2.2 BIS',
          },
        ],
      },
      {
        name: 'Troubles gastro-intestinaux apyrétiques',
        agents: [
          {
            name: 'Benzène , toluène, xylènes et tous les produits les renfermant',
            path: '122BIS.pdf',
            n_table: '1.2.2 BIS',
          },
        ],
      },
      {
        name: 'Hépatite',
        agents: [
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
          {
            name: 'Halothane ',
            path: '155.pdf',
            n_table: '1.5.5',
          },
          {
            name: 'Hydrocarbures aliphatiques halogénés énumérés ci-après : dichlorométhane ; trichlorométhane ; tribromométhane ; triiodométhane ; tétrabromométhane ; chloroéthane ; 1,1-dichloroéthane ; 1,2-dichloroéthane ; 1,2-dibromoéthane ; 1,1,1- trichloroéthane ; 1,1,2-trichloroéthane ; 1,1,2,2-tétrabromoéthane ; pentachloroéthane ; 1-bromopropane ; 2-bromopropane ; 1,2- dichloropropane ; trichloroéthylène ; tétrachloroéthylène ; dichloro- acétylène ; trichlorofluorométhane ; 1,1,2,2-tétrachloro - 1,2-difluoroéthane ; 1,1,1,2-tétrachloro - 2,2-difluoroéthane ; 1,1,2-trichloro - 1,2,2- trifluoroéthane ; 1,1,1-trichloro - 2,2,2-trifluoroéthane ; 1,1-dichloro - 2,2,2- trifluoroéthane ; 1,2-dichloro - 1,1-difluoroéthane ; 1,1-dichloro - 1- fluoroéthane. ',
            path: '121.pdf',
            n_table: '1.2.1',
          },
          {
            name: 'Tétrachloréthane',
            path: '1213.pdf',
            n_table: '1.2.13',
          },
          {
            name: 'Tétrachlorure de carbone ',
            path: '1214.pdf',
            n_table: '1.2.14',
          },
          {
            name: 'Virus des Hépatites A,B,C,D et E ',
            path: '311.pdf',
            n_table: '3.11',
          },
        ],
      },
      {
        name: 'Troubles gastro-intestinaux aigus',
        agents: [
          {
            name: 'Cadmium et ses composés',
            path: 'CADMIUM.pdf',
            n_table: '1.1.14',
          },
        ],
      },
      {
        name: 'Diarrhées',
        agents: [
          {
            name: 'Cadmium et ses composés',
            path: 'CADMIUM.pdf',
            n_table: '1.1.14',
          },
          {
            name: "Dérivés nitrés du phénol (dinitrophénols,dinitro-orthocrésol, dinoseb), par le pentachlorophénol, les pentachlorophénates et par les dérivés halogènes de l'hydroxybenzonitrile (bromoxynil, ioxynil) ",
            path: '126.pdf',
            n_table: '1.2.6',
          },
          {
            name: 'Mercure et ses composés',
            path: 'MERCURE.pdf',
            n_table: '1.1.2',
          },
          {
            name: 'Sulfocarbonisme ',
            path: '1223.pdf',
            n_table: '1.2.23',
          },
        ],
      },
      {
        name: 'Charbon gastro-intestinal',
        agents: [
          {
            name: 'Charbon professionnel ',
            path: '33.pdf',
            n_table: '3.3',
          },
        ],
      },
      {
        name: 'Atteinte digestive',
        agents: [
          {
            name: 'Ornithose Psittacose ',
            path: '37.pdf',
            n_table: '3.7',
          },
        ],
      },
      {
        name: 'Crampes abdominales',
        agents: [
          {
            name: "Phosphates, les pyrophosphates et thiophosphates d'alcoyle, d'aryle ou d'alcoylaryle et autres organophosphorés anticholinéstérasiques ainsi que par les phosphoramides et car bamates hétérocycliques anticholinéstérasiques ",
            path: '142.pdf',
            n_table: '1.4.2',
          },
        ],
      },
      {
        name: 'Hypersalivation',
        agents: [
          {
            name: "Phosphates, les pyrophosphates et thiophosphates d'alcoyle, d'aryle ou d'alcoylaryle et autres organophosphorés anticholinéstérasiques ainsi que par les phosphoramides et car bamates hétérocycliques anticholinéstérasiques ",
            path: '142.pdf',
            n_table: '1.4.2',
          },
        ],
      },
      {
        name: 'Ictère',
        agents: [
          {
            name: 'Tétrachloréthane',
            path: '1213.pdf',
            n_table: '1.2.13',
          },
          {
            name: 'Tétrachlorure de carbone ',
            path: '1214.pdf',
            n_table: '1.2.14',
          },
        ],
      },
    ],
  },
  {
    pathology_name: 'Pathologies ostéoarticulaires',
    pathology_types: [
      {
        name: 'Arthrite ',
        agents: [
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
          {
            name: 'Spirochétoses ',
            path: '34.pdf',
            n_table: '3.4',
          },
        ],
      },
      {
        name: 'Mono-arthrite',
        agents: [
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
        ],
      },
      {
        name: 'Ostéite',
        agents: [
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
        ],
      },
      {
        name: 'Ostéo-arthrite',
        agents: [
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
        ],
      },
      {
        name: 'Sacroxite',
        agents: [
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
        ],
      },
      {
        name: 'Spondylodiscite',
        agents: [
          {
            name: 'Brucelloses professionnelles ',
            path: '31.pdf',
            n_table: '3.1 ',
          },
        ],
      },
      {
        name: 'Ostéomalacie',
        agents: [
          {
            name: 'Cadmium et ses composés',
            path: 'CADMIUM.pdf',
            n_table: '1.1.14',
          },
          {
            name: 'Phosphore et sesquisulfure de phosphore',
            path: 'phspho.pdf',
            n_table: '1.1.9',
          },
        ],
      },
      {
        name: 'Ostéolyse des phalanges unguéales des mains',
        agents: [
          {
            name: 'Chlorure de vinyle',
            path: '133.pdf',
            n_table: '1.3.3',
          },
        ],
      },
      {
        name: 'Calcifications des ligaments sacro-sciatiques',
        agents: [
          {
            name: 'Fluor, acide fluorhydrique et ses sels minéraux',
            path: 'fluor.pdf',
            n_table: '1.1.10',
          },
        ],
      },
      {
        name: 'Calcifications des membranes interosseuses, radiocubitale ou obturatrice',
        agents: [
          {
            name: 'Fluor, acide fluorhydrique et ses sels minéraux',
            path: 'fluor.pdf',
            n_table: '1.1.10',
          },
        ],
      },
      {
        name: 'Ostéo-condensation diffuse',
        agents: [
          {
            name: 'Fluor, acide fluorhydrique et ses sels minéraux',
            path: 'fluor.pdf',
            n_table: '1.1.10',
          },
        ],
      },
      {
        name: 'Syndrome ostéo-ligamentaire douloureux ou non',
        agents: [
          {
            name: 'Fluor, acide fluorhydrique et ses sels minéraux',
            path: 'fluor.pdf',
            n_table: '1.1.10',
          },
        ],
      },
      {
        name: "Tendinopathie aigue de l'épaule (non rompue non calcifiante avec ou sans enthésopathie de la coiffe)",
        agents: [
          {
            name: 'Gestes et postures du travail ',
            path: '27.pdf',
            n_table: '2.7',
          },
        ],
      },
      {
        name: "Tendinopathie chronique de l'épaule (non rompue non calcifiante avec ou sans enthésopathie de la coiffe)",
        agents: [
          {
            name: 'Gestes et postures du travail ',
            path: '27.pdf',
            n_table: '2.7',
          },
        ],
      },
      {
        name: 'Rupture partielle ou transfixiante de la coiffe des rotateurs ',
        agents: [
          {
            name: 'Gestes et postures du travail ',
            path: '27.pdf',
            n_table: '2.7',
          },
        ],
      },
      {
        name: 'Epicondylite du coude',
        agents: [
          {
            name: 'Gestes et postures du travail ',
            path: '27.pdf',
            n_table: '2.7',
          },
        ],
      },
      {
        name: 'Épitrochléite du coude',
        agents: [
          {
            name: 'Gestes et postures du travail ',
            path: '27.pdf',
            n_table: '2.7',
          },
        ],
      },
      {
        name: 'Hygroma aigue du coude',
        agents: [
          {
            name: 'Gestes et postures du travail ',
            path: '27.pdf',
            n_table: '2.7',
          },
        ],
      },
      {
        name: 'Hygroma chronique du coude',
        agents: [
          {
            name: 'Gestes et postures du travail ',
            path: '27.pdf',
            n_table: '2.7',
          },
        ],
      },
      {
        name: 'Syndrome de compression du nerf sciatique poplité externe',
        agents: [
          {
            name: 'Gestes et postures du travail ',
            path: '27.pdf',
            n_table: '2.7',
          },
        ],
      },
      {
        name: 'Hygroma aigu du genou',
        agents: [
          {
            name: 'Gestes et postures du travail ',
            path: '27.pdf',
            n_table: '2.7',
          },
        ],
      },
      {
        name: 'Hygroma chronique du genou',
        agents: [
          {
            name: 'Gestes et postures du travail ',
            path: '27.pdf',
            n_table: '2.7',
          },
        ],
      },
      {
        name: 'Tendinite sous quadricipitale ou rotulienne',
        agents: [
          {
            name: 'Gestes et postures du travail ',
            path: '27.pdf',
            n_table: '2.7',
          },
        ],
      },
      {
        name: "Tendinite de la patte d'oie",
        agents: [
          {
            name: 'Gestes et postures du travail ',
            path: '27.pdf',
            n_table: '2.7',
          },
        ],
      },
      {
        name: 'Tendinite achilienne',
        agents: [
          {
            name: 'Gestes et postures du travail ',
            path: '27.pdf',
            n_table: '2.7',
          },
        ],
      },
      {
        name: 'Fissuration ou rupture',
        agents: [
          {
            name: 'Lésions chroniques du ménisque ',
            path: '210.pdf',
            n_table: '2.10',
          },
        ],
      },
      {
        name: 'Lésions chroniques du ménisque à caractère dégénératif',
        agents: [
          {
            name: 'Lésions chroniques du ménisque',
            path: '210.pdf',
            n_table: '2.10',
          },
        ],
      },
      {
        name: 'Sciatique par hernie discale',
        agents: [
          {
            name: 'Manutention manuelle de charges lourdes ',
            path: '29.pdf',
            n_table: '2.9',
          },
          {
            name: 'Vibrations de basses et moyennes fréquences transmises au corps entier ',
            path: '28.pdf',
            n_table: '2.8',
          },
        ],
      },
      {
        name: 'Radiculalgie par hernie discale',
        agents: [
          {
            name: 'Manutention manuelle de charges lourdes ',
            path: '29.pdf',
            n_table: '2.9',
          },
          {
            name: 'Vibrations de basses et moyennes fréquences transmises au corps entier ',
            path: '28.pdf',
            n_table: '2.8',
          },
        ],
      },
      {
        name: 'Atteinte articulaire (Epaule, hanche, genou)',
        agents: [
          {
            name: 'Pression est supérieure à la pression atmosphérique ',
            path: '211.pdf',
            n_table: '2.11',
          },
        ],
      },
      {
        name: 'Ostéoporose',
        agents: [
          {
            name: 'Pression est supérieure à la pression atmosphérique ',
            path: '211.pdf',
            n_table: '2.11',
          },
        ],
      },
      {
        name: 'Radionécrose osseuse',
        agents: [
          {
            name: 'Rayonnements ionisants ',
            path: '21.pdf',
            n_table: '2.1',
          },
        ],
      },
      {
        name: 'Oligoathrite régressive',
        agents: [
          {
            name: 'Spirochétoses ',
            path: '34.pdf',
            n_table: '3.4',
          },
        ],
      },
      {
        name: 'Arthrose du coude',
        agents: [
          {
            name: 'Vibrations et chocs transmis par certaines machines-outils, outils et objets et par les chocs itératifs du talon de la main sur des éléments fixes gestes et postures de travail ',
            path: '26.pdf',
            n_table: '2.6',
          },
        ],
      },
      {
        name: 'Ostéonécrose du scaphoïde carpien',
        agents: [
          {
            name: 'Vibrations et chocs transmis par certaines machines-outils, outils et objets et par les chocs itératifs du talon de la main sur des éléments fixes gestes et postures de travail ',
            path: '26.pdf',
            n_table: '2.6',
          },
        ],
      },
      {
        name: 'Ostéonécrose du semi-lunaire',
        agents: [
          {
            name: 'Vibrations et chocs transmis par certaines machines-outils, outils et objets et par les chocs itératifs du talon de la main sur des éléments fixes gestes et postures de travail ',
            path: '26.pdf',
            n_table: '2.6',
          },
        ],
      },
    ],
  },
];

export const pathologies = data.map(pathology => ({
  label: pathology.pathology_name,
  value: pathology.pathology_name,
}));

export const getPathologyTypes = selectedPathology => {
  return (
    selectedPathology &&
    data
      .find(pathology => pathology.pathology_name === selectedPathology)
      .pathology_types.map(pathologyType => ({
        label: pathologyType.name,
        value: pathologyType.name,
      }))
  );
};

export const getPathologiesByAgent = agentName => {
  const relatedPathologies = new Set();

  for (const pathology of data) {
    for (const pathologyType of pathology.pathology_types) {
      for (const agent of pathologyType.agents) {
        if (agent.name === agentName) {
          relatedPathologies.add(pathology.pathology_name);
          break;
        }
      }
    }
  }

  return Array.from(relatedPathologies);
};

export const getPathologyTypeAgents = (
  selectedPathology,
  selectedPathologyType,
) => {
  return (
    selectedPathology &&
    selectedPathologyType &&
    data
      .find(pathology => pathology.pathology_name === selectedPathology)
      .pathology_types.find(
        pathologyType => pathologyType.name === selectedPathologyType,
      )?.agents
  );
};

export const getAllAgents = () => {
  const agents = [];

  for (const pathology of data) {
    for (const pathologyType of pathology.pathology_types) {
      for (const agent of pathologyType.agents) {
        const existingAgent = agents.find(a => a.name === agent.name);
        if (!existingAgent) {
          agents.push(agent);
        }
      }
    }
  }

  return agents;
};

export const searchAgents = searchTerm => {
  return getAllAgents().filter(agent => {
    const regex = new RegExp(searchTerm, 'gi');
    return agent.name.match(regex) || agent.n_table.match(regex);
  });
};
*/