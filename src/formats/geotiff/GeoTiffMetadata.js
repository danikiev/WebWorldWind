/*
 * Copyright (C) 2014 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */
/**
 * @exports GeoTiffMetadata
 */
define([
    ],
    function () {
        "use strict";

        /**
         * Provides GeoTIFF metadata.
         * @alias GeoTiffMetadata
         * @constructor
         * @classdesc Contains all of the TIFF and GeoTIFF metadata for a geotiff file.
         */
        var GeoTiffMetadata = function () {

            // Documented in defineProperties below.
            this._bitsPerSample = null;

            // Documented in defineProperties below.
            this._colorMap = null;

            // Documented in defineProperties below.
            this._compression = null;

            // Documented in defineProperties below.
            this._imageLength = null;

            // Documented in defineProperties below.
            this._imageWidth = null;

            // Documented in defineProperties below.
            this._photometricInterpretation = null;

            // Documented in defineProperties below.
            this._planarConfiguration = null;

            // Documented in defineProperties below.
            this._rowsPerStrip = null;

            // Documented in defineProperties below.
            this._samplesPerPixel = null;

            // Documented in defineProperties below.
            this._sampleFormat = null;

            // Documented in defineProperties below.
            this._stripByteCounts = null;

            // Documented in defineProperties below.
            this._stripOffsets = null;

            // Documented in defineProperties below.
            this._tileOffests = null;

            // Documented in defineProperties below.
            this._geoAsciiParams = null;

            // Documented in defineProperties below.
            this._geoDoubleParams = null;

            // Documented in defineProperties below.
            this._geoKeyDirectory = null;

            // Documented in defineProperties below.
            this._modelPixelScale = null;

            // Documented in defineProperties below.
            this._modelTiepoint = null;

            // Documented in defineProperties below.
            this._modelTransformation = null;

            // Documented in defineProperties below.
            this._noData = null;

            // Documented in defineProperties below.
            this._bbox = null;

            // Documented in defineProperties below.
            this._projectedCSType = null;

        };

        Object.defineProperties(GeoTiffMetadata.prototype, {

            /**
             * Contains the number of bits per component.
             * @memberof GeoTiffMetadata.prototype
             * @type {Number[]}
             */
            bitsPerSample: {
                get: function () {
                    return this._bitsPerSample;
                },

                set: function(value){
                    this._bitsPerSample = value;
                }
            },

            /**
             * Defines a Red-Green-Blue color map (often called a lookup table) for palette color images.
             * In a palette-color image, a pixel value is used to index into an RGB-lookup table.
             * @memberof GeoTiffMetadata.prototype
             * @type {Number[]}
             */
            colorMap: {
                get: function () {
                    return this._colorMap;
                },

                set: function(value){
                    this._colorMap = value;
                }
            },

            /**
             * Contains the compression type of geotiff data.
             * @memberof GeoTiffMetadata.prototype
             * @type {Number}
             */
            compression: {
                get: function () {
                    return this._compression;
                },

                set: function(value){
                    this._compression = value;
                }
            },

            /**
             * Contains the number of rows in the image.
             * @memberof GeoTiffMetadata.prototype
             * @type {Number}
             */
            imageLength: {
                get: function () {
                    return this._imageLength;
                },

                set: function(value){
                    this._imageLength = value;
                }
            },

            /**
             * Contains the number of columns in the image.
             * @memberof GeoTiffMetadata.prototype
             * @type {Number}
             */
            imageWidth: {
                get: function () {
                    return this._imageWidth;
                },

                set: function(value){
                    this._imageWidth = value;
                }
            },

            /**
             * Contains the photometric interpretation type of the geotiff file.
             * @memberof GeoTiffMetadata.prototype
             * @type {Number}
             */
            photometricInterpretation: {
                get: function () {
                    return this._photometricInterpretation;
                },

                set: function(value){
                    this._photometricInterpretation = value;
                }
            },

            /**
             * Contains the planar configuration type of the geotiff file.
             * @memberof GeoTiffMetadata.prototype
             * @type {Number}
             */
            planarConfiguration: {
                get: function () {
                    return this._planarConfiguration;
                },

                set: function(value){
                    this._planarConfiguration = value;
                }
            },

            /**
             * Contains the number of rows per strip.
             * @memberof GeoTiffMetadata.prototype
             * @type {Number}
             */
            rowsPerStrip: {
                get: function () {
                    return this._rowsPerStrip;
                },

                set: function(value){
                    this._rowsPerStrip = value;
                }
            },

            /**
             * Contains the number of components per pixel.
             * @memberof GeoTiffMetadata.prototype
             * @type {Number}
             */
            samplesPerPixel: {
                get: function () {
                    return this._samplesPerPixel;
                },

                set: function(value){
                    this._samplesPerPixel = value;
                }
            },

            /**
             * This field specifies how to interpret each data sample in a pixel. Possible values are:
             * <ul>
             *     <li>unsigned integer data</li>
             *     <li>two's complement signed integer data</li>
             *     <li>IEEE floating point data</li>
             *     <li>undefined data format</li>
             * </ul>
             * @memberof GeoTiffMetadata.prototype
             * @type {Number}
             */
            sampleFormat: {
                get: function () {
                    return this._sampleFormat;
                },

                set: function(value){
                    this._sampleFormat = value;
                }
            },

            /**
             * Contains the number of bytes in that strip after any compression, for each strip.
             * @memberof GeoTiffMetadata.prototype
             * @type {Number[]}
             */
            stripByteCounts: {
                get: function () {
                    return this._stripByteCounts;
                },

                set: function(value){
                    this._stripByteCounts = value;
                }
            },

            /**
             * Contains the byte offset of that strip, for each strip.
             * @memberof GeoTiffMetadata.prototype
             * @type {Number[]}
             */
            stripOffsets: {
                get: function () {
                    return this._stripOffsets;
                },

                set: function(value){
                    this._stripOffsets = value;
                }
            },

            /**
             * Contains the byte offset of that tile, for each tile.
             * @memberof GeoTiffMetadata.prototype
             * @type {Number[]}
             */
            tileOffests: {
                get: function () {
                    return this._tileOffests;
                },

                set: function(value){
                    this._tileOffests = value;
                }
            },

            //geotiff
            /**
             * Contains all of the ASCII valued GeoKeys, referenced by the GeoKeyDirectoryTag.
             * @memberof GeoTiffMetadata.prototype
             * @type {String[]}
             */
            geoAsciiParams: {
                get: function () {
                    return this._geoAsciiParams;
                },

                set: function(value){
                    this._geoAsciiParams = value;
                }
            },

            /**
             * Contains all of the DOUBLE valued GeoKeys, referenced by the GeoKeyDirectoryTag.
             * @memberof GeoTiffMetadata.prototype
             * @type {Nmber[]}
             */
            geoDoubleParams: {
                get: function () {
                    return this._geoAsciiParams;
                },

                set: function(value){
                    this._geoAsciiParams = value;
                }
            },

            /**
             * Contains the values of GeoKeyDirectoryTag.
             * @memberof GeoTiffMetadata.prototype
             * @type {Nmber[]}
             */
            geoKeyDirectory: {
                get: function () {
                    return this._geoKeyDirectory;
                },

                set: function(value){
                    this._geoKeyDirectory = value;
                }
            },

            /**
             * Contains the values of ModelPixelScaleTag. The ModelPixelScaleTag tag may be used to specify the size
             * of raster pixel spacing in the model space units, when the raster space can be embedded in the model
             * space coordinate system without rotation
             * @memberof GeoTiffMetadata.prototype
             * @type {Nmber[]}
             */
            modelPixelScale: {
                get: function () {
                    return this._modelPixelScale;
                },

                set: function(value){
                    this._modelPixelScale = value;
                }
            },

            /**
             * Stores raster->model tiepoint pairs in the order ModelTiepointTag = (...,I,J,K, X,Y,Z...),
             * where (I,J,K) is the point at location (I,J) in raster space with pixel-value K,
             * and (X,Y,Z) is a vector in model space.
             * @memberof GeoTiffMetadata.prototype
             * @type {Nmber[]}
             */
            modelTiepoint: {
                get: function () {
                    return this._modelTiepoint;
                },

                set: function(value){
                    this._modelTiepoint = value;
                }
            },

            /**
             * Contains the information that may be used to specify the transformation matrix between the raster space
             * (and its dependent pixel-value space) and the model space.
             * @memberof GeoTiffMetadata.prototype
             * @type {Nmber[]}
             */
            modelTransformation: {
                get: function () {
                    return this._modelTransformation;
                },

                set: function(value){
                    this._modelTransformation = value;
                }
            },

            /**
             * Contains the NODATA value.
             * @memberof GeoTiffMetadata.prototype
             * @type {String}
             */
            noData: {
                get: function () {
                    return this._noData;
                },

                set: function(value){
                    this._noData = value;
                }
            },

            /**
             * Contains the extent of the geotiff.
             * @memberof GeoTiffMetadata.prototype
             * @type {Sector}
             */
            bbox: {
                get: function () {
                    return this._bbox;
                },

                set: function(value){
                    this._bbox = value;
                }
            },

            //geokeys
            /**
             * Contains the EPSG code of the geotiff.
             * @memberof GeoTiffMetadata.prototype
             * @type {Number}
             */
            projectedCSType: {
                get: function () {
                    return this._projectedCSType;
                },

                set: function(value){
                    this._projectedCSType = value;
                }
            },


        });

        return GeoTiffMetadata;
    }
);