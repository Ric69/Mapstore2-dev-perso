/**
 * !! IMPORTANT
 * Il faut classer les plugins par ordre alphabétique. Pour éviter d'avoir des problèmes de conflit entre chaque `git merge`
 *
 * Pareil dans le fichier js/localConfig.json
 *
 * @type {Object}
 */
module.exports = {
    plugins: {
        AddGroupPlugin: require('@mapstore/plugins/AddGroup').default,
        AnnotationsPlugin: require('@js/plugins/Annotations'),
        AtlasPlugin: require('@js/plugins/Atlas'),
        AutoLogin: require('@js/plugins/AutoLoginSSO'),
        BackgroundSelectorPlugin: require('@mapstore/plugins/BackgroundSelector'),
        BurgerMenuPlugin: require('@mapstore/plugins/BurgerMenu'),
        CreateNewMapPlugin: require('@js/plugins/CreateNewMap'),
        Csv2ShapefilePlugin: require('@js/plugins/Csv2Shapefile'),
        DrawerMenuPlugin: require('@mapstore/plugins/DrawerMenu'),
        DrawingPlugin: require('@js/plugins/Draw'),
        ExpanderPlugin: require('@mapstore/plugins/Expander'),
        FeatureEditorPlugin: require('@mapstore/plugins/FeatureEditor'),
        GeoProcessingPlugin: require('@js/plugins/GeoProcessing'),
        GeorchestraAccessBurgerMenuPlugin: require('@js/plugins/GeorchestraAccess/BurgerMenu').default,
        GeosignetPlugin: require('@js/plugins/Geosignet'),
        GeoTagLocate: require('@js/plugins/GeoTagLocate'),
        GlobeViewSwitcherPlugin: require('@mapstore/plugins/GlobeViewSwitcher'),
        HomePlugin: require('@js/plugins/Home'),
        IdentifyPlugin: require('@mapstore/plugins/Identify'),
        LidarPlugin: require('@js/plugins/Lidar'),
        LocatePlugin: require('@mapstore/plugins/Locate'),
        LoginPlugin: require('@mapstore/plugins/Login'),
        MapPlugin: require('@mapstore/plugins/Map.jsx'),
        MapSearchPlugin: require('@mapstore/plugins/MapSearch'),
        MapsPlugin: require('@js/plugins/Maps'),
        MapsLinkPlugin: require('@js/plugins/MapsLink'),
        MapExportPlugin: require('@js/plugins/MapExport').default,
        MapFooterPlugin: require('@mapstore/plugins/MapFooter'),
        MapLoadingPlugin: require('@mapstore/plugins/MapLoading'),
        MapImportPlugin: require('@js/plugins/MapImport'),
        MeasurePlugin: require('@js/plugins/MeasuresList'),
        MetadataExplorerPlugin: require('@mapstore/plugins/MetadataExplorer'),
        MousePositionPlugin: require('@mapstore/plugins/MousePosition'),
        NotificationsPlugin: require('@mapstore/plugins/Notifications'),
        NotifyPlugin: require('@js/plugins/Notify'),
        OmniBarPlugin: require('@mapstore/plugins/OmniBar'),
        PicturesPlugin: require('@js/plugins/Pictures'),
        PlaybackPlugin: require('@mapstore/plugins/Playback'),
        PrintPlugin: require('@mapstore/plugins/Print'),
        ProfilePlugin: require('@js/plugins/Profile'),
        ProjectionsPlugin: require('@js/plugins/Projections'),
        ProvidersPlugin: require('@js/plugins/Providers'),
        QueryPanelPlugin: require('@mapstore/plugins/QueryPanel'),
        RasterPlugin: require('@js/plugins/Raster'),
        RedoPlugin: require('@mapstore/plugins/History'),
        SavePlugin: require('@mapstore/plugins/Save').default,
        SaveAsPlugin: require('@mapstore/plugins/SaveAs').default,
        ScaleBoxPlugin: require('@mapstore/plugins/ScaleBox'),
        SearchPlugin: require('@mapstore/plugins/Search'),
        StreetViewPlugin: require('@js/plugins/StreetView'),
        StyleEditorPlugin: require('@mapstore/plugins/StyleEditor'),
        SurvolPlugin: require('@js/plugins/Survol'),
        TabEpics: require('@js/plugins/TabNameEpics'),
        TempoPlugin: require('@js/plugins/Tempo'),
        TimelinePlugin: require('@mapstore/plugins/Timeline'),
        TOCPlugin: require('@mapstore/plugins/TOC'),
        TOCItemsSettingsPlugin: require('@mapstore/plugins/TOCItemsSettings'),
        ToolbarPlugin: require('@mapstore/plugins/Toolbar'),
        TutorialPlugin: require('@mapstore/plugins/Tutorial'),
        UndoPlugin: require('@mapstore/plugins/History'),
        WFSDownloadPlugin: require('@mapstore/plugins/WFSDownload'),
        WidgetsPlugin: require('@js/plugins/Widgets'),
        WidgetsPagePlugin: require('@js/plugins/WidgetsPage'),
        WindowModalPlugin: require('@js/plugins/WindowModal').default,
        ZoomAllPlugin: require('@mapstore/plugins/ZoomAll'),
        ZoomInPlugin: require('@mapstore/plugins/ZoomIn'),
        ZoomOutPlugin: require('@mapstore/plugins/ZoomOut'),
        ZOrthoPlugin: require('@js/plugins/ZOrtho'),
    },
    requires: {
        ReactSwipe: require('react-swipeable-views').default,
        SwipeHeader: require('@mapstore/components/data/identify/SwipeHeader'),
    },
};
